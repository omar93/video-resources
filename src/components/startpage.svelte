<script>
    import Videolist from "../components/videolist.svelte";
    import { getVideos, saveVideos } from "../lib/helpers";
    import { onMount } from 'svelte';
    
    onMount(() => getVideos())
    
    let list = []
    let inputValue = ''
    
    const handleNewVideoSubmit = async () => {
        let youtubeID = inputValue.split('v=')[1]
        let imageHandler = `https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`
        let videoJson = generateJson(inputValue, imageHandler)
        saveVideos('videos', videoJson)
    }

    const generateJson = (videoUrl, imageHandler) => {
        let video = {
            videoUrl: videoUrl,
            imgUrl: imageHandler
        }
        return video
    }
</script>

<div id="main--container">
    <form id="link--form" on:submit|preventDefault={handleNewVideoSubmit}>
        <input type="text" name="link" placeholder="Youtube Link" bind:value={inputValue}/>
    </form>
    <hr>
    <div id="video--container">
        {#await list}
            <p>loading...</p>
        {:then list}
            <Videolist/>
        {/await}
    </div>
</div>

<style>
    #main--container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
        height: 100vh;
        width: 100vw;
    }

    form {
        margin-top: 20px;
    }

    #video--container {
        margin-top: 50px;
        height: 90%;
        width: 100%;
    }
</style>