<script>
    import { getVideos, saveVideos } from "../lib/helpers";
    import { onMount } from 'svelte';
    
    onMount(() => getVideos())
    
    let inputValue = ''
    
    const handleNewVideoSubmit = async () => {
        let youtubeID = inputValue.split('v=')[1]
        let imageHandler = `https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`
        let videoJson = generateJson(inputValue, imageHandler, youtubeID)
        saveVideos('videos', videoJson)
    }

    const generateJson = (videoUrl, imageHandler, youtubeID) => {
        let video = {
            videoUrl: videoUrl,
            imgUrl: imageHandler,
            videoID: youtubeID
        }
        console.log(video);
        return video
    }
</script>

<form id="link--form" on:submit|preventDefault={handleNewVideoSubmit}>
    <label for="link">Add new youtube video</label>
    <input id="link--input" type="text" name="link" placeholder="https://www.youtube.com/" bind:value={inputValue}/>
</form>

<style>
    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2em;
        width: 500px;
    }

    #link--input {
        outline: none;
        border:none;
        text-align: center;
        height: 30px;
        border-radius: 5px;
        width: 500px;
    }
</style>