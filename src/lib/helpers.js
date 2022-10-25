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
            videoUrl: object.videoUrl
        }]
    })
    videoStore.set(list)
}

export const saveVideos = async (collection, newVideo) => {
    await client.records.create(collection, newVideo)
    videoStore.update(items => [...items, newVideo])
}