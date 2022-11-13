import { redirect } from "@sveltejs/kit"
import { YOUTUBE_API_KEY } from '$env/static/private'
import { saveVideos } from "../lib/helpers";

export const actions = {
    default: async ({ locals, request }) => {

        const formData = await request.formData();
        let link = formData.get('link')
        let youtubeID = link.split('v=')[1]

        let json = await fetchFromYoutube(youtubeID)

        let videoObject = {
            title: json.items[0].snippet.title,
            img: json.items[0].snippet.thumbnails.high.url,
            url: link
        }
        
        saveVideos('videos', videoObject)
        await locals.youtube.link('omar')
        locals.youtube = "omar"
        throw redirect(303, '/')
    }
}

const fetchFromYoutube = async (youtubeID) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=${YOUTUBE_API_KEY}+&part=snippet,contentDetails,status`
    let response = await fetch(url)
    let text = await new Response(response.body).text();
    let json = await JSON.parse(text)
    return json
}


