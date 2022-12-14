import PocketBase from 'pocketbase'
import { videoStore } from './store'
import { PUBLIC_DB_CONNECTIONURL } from '$env/static/public'

const client = new PocketBase(PUBLIC_DB_CONNECTIONURL)

export const getVideos = async () => {
    const resultList = await client.records.getList('videos', 1, 50)
    let list = []
    resultList.items.forEach(object => {
        list = [...list,{
            id: object.id,
            img: object.img,
            url: object.url,
            title: object.title
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

export const saveDefaultList = async (collection, list) => {
    await client.records.create(collection, list)
}