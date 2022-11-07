import { redirect } from "@sveltejs/kit"
import { YOUTUBE_API_KEY } from '$env/static/private'

export const actions = {
    default: async ({ locals, request }) => {

        console.log("locals");
        console.log(locals);

        const formData = await request.formData();
        let link = formData.get('link')
        let youtubeID = link.split('v=')[1]

        let json = await fetchFromYoutube(youtubeID)

        let videoObject = {
            title: json.items[0].snippet.title,
            img: json.items[0].snippet.thumbnails.high.url,
            youtubeID: youtubeID
        }

        await locals.youtube.link('omar')
        
        locals.pocketbase.authStore.clear()

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


