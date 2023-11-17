import { SECRET_YOUTUBE_API_KEY } from '$env/static/private'
import PocketBase from 'pocketbase'

export async function GET  ({ request, locals, event }) {

    const DBConnectionUrl = locals.pocketbase.baseUrl
    const client = new PocketBase(DBConnectionUrl)
    const userID = locals.user.id
    
    try {
        const resultList = await client.records.getList('videos', 1, 50, {
            filter: `userID = "${userID}"`
        })
        let list = []
        resultList.items.forEach(object => {
            list = [...list,{
                id: object.id,
                img: object.img,
                url: object.url,
                title: object.title
            }]
        })
        const status = { status: 200, statusText: 'Videos downloaded' }
        return new Response(JSON.stringify(list,{ status: 200, statusText: 'Video saved' }))
    } catch (error) {
        const status = { status: 500, statusText: 'Something went wrong' }
        return error
    }

}

export async function POST  ({ request, locals }) {

    const DBConnectionUrl = locals.pocketbase.baseUrl
    const client = new PocketBase(DBConnectionUrl)
    const youtubeURL = await request.json();
    const youtubeID = getYoutubeID(youtubeURL)
    const json = await fetchFromYoutubeApi(youtubeID)
    const userID = locals.user.id
    
    let videoObject = {
        title: json.items[0].snippet.title,
        img: json.items[0].snippet.thumbnails.high.url,
        url: youtubeURL,
        userID: userID
    }

    try {
        await client.records.create("videos", videoObject)
        const status = { status: 200 }
        return new Response(JSON.stringify(status), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        const status = { status: 500 }
        return new Response(JSON.stringify(status), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
}

const getYoutubeID = (videoUrl) => {
    let youtubeID = videoUrl.split('v=')[1]
    return youtubeID
}

const fetchFromYoutubeApi = async (youtubeID) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=${SECRET_YOUTUBE_API_KEY}+&part=snippet,contentDetails,status`
    let response = await fetch(url)
    let text = await new Response(response.body).text()
    let json = await JSON.parse(text)
    return json
}