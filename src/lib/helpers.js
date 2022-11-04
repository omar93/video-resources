import PocketBase from 'pocketbase'
import { videoStore } from './store'

const client = new PocketBase('http://192.168.1.200:8090')

export const subscribe = async (video) => {
    // Subscribe to changes in any record from the collection
    client.realtime.subscribe('videos', e => {
        console.log(e);

        let video = {
            id: e.record.id,
            imgUrl: e.record.imgUrl,
            videoUrl: e.record.videoUrl,
            videoID: e.record.videoID,
        }

        if(e.action === 'create') {
            videoStore.update(items => [...items, video])
        }

        if(e.action === 'delete') {
            videoStore.update(items => items.filter(item => item.id !== video.id))
        }
        
    });
}

export const getVideos = async () => {
    const resultList = await client.records.getList('videos', 1, 50)
    let list = []
    resultList.items.forEach(object => {
        list = [...list,{
            id: object.id,
            imgUrl: object.imgUrl,
            videoUrl: object.videoUrl,
            videoID: object.videoID,
        }]
    })
    videoStore.set(list)
}

export const saveVideos = async (collection, newVideo) => {
    let savedToDB = await client.records.create(collection, newVideo)
    let id = savedToDB.id
    let item = {...newVideo, id}
    videoStore.update(items => [...items, item])
}

export const deleteVideo = async (collection, id) => {
    await client.records.delete(collection, id)
    videoStore.update(items => items.filter(item => item.id !== id))
}