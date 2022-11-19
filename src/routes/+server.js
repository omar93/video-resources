import { YOUTUBE_API_KEY } from '$env/static/private'
import PocketBase from 'pocketbase'


 
export async function POST  ({ request, locals }) {
    const DBConnectionUrl = locals.pocketbase.baseUrl
    const client = new PocketBase(DBConnectionUrl)
    const youtubeURL = await request.json();
    const youtubeID = getYoutubeID(youtubeURL)
    const json = await fetchFromYoutubeApi(youtubeID)

    let videoObject = {
        title: json.items[0].snippet.title,
        img: json.items[0].snippet.thumbnails.high.url,
        url: youtubeURL
    }


    let savedToDB = await client.records.create("videos", videoObject)

    return savedToDB;
}

const getYoutubeID = (videoUrl) => {
    let youtubeID = videoUrl.split('v=')[1]
    return youtubeID
}

const fetchFromYoutubeApi = async (youtubeID) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=${YOUTUBE_API_KEY}+&part=snippet,contentDetails,status`
    let response = await fetch(url)
    let text = await new Response(response.body).text();
    let json = await JSON.parse(text)
    return json
}