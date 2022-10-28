<script>
    import VideosGrid from "./videosGrid.svelte";
    import { getVideos, saveVideos } from "../lib/helpers";
    import { onMount } from 'svelte';
    
    onMount(() => getVideos())
    
    let list = []
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

<div id="main--container">
    <form id="link--form" on:submit|preventDefault={handleNewVideoSubmit}>
        <label for="link">Add new youtube video:</label>
        <input type="text" name="link" placeholder="Youtube Link" bind:value={inputValue}/>
    </form>
    <div id="video--container">
        <VideosGrid/>
    </div>
</div>

<style>
    #main--container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        font-size: 2em;
    }

    #video--container {
        width: 100%;
        min-height: 100%;
    }
</style>