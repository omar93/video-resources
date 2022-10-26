import PocketBase from 'pocketbase'
import { videoStore } from './store'

const client = new PocketBase('http://127.0.0.1:8090')

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