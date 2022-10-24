<script>
    import PocketBase from 'pocketbase';
    import Videolist from "./videolist.svelte";

    import { onMount } from 'svelte';
    const client = new PocketBase('http://127.0.0.1:8090');
    
    let list = []

    onMount(async () => {
        const resultList = await client.records.getList('videos', 1, 50)
        
        resultList.items.forEach(object => {

            list = [...list,{
                id: object.id,
                imgUrl: object.imgurl,
                videoUrl: object.videourl
            }]
        })
    });

    let inputValue = ''
    
    const handleNewVideoSubmit = async () => {
        let youtubeID = inputValue.split('v=')[1]
        let imageHandler = `https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`
        let video = {
            videourl: inputValue,
            imgurl: imageHandler
        }
        list = [...list, video]
        const record = await client.records.create('videos', video);
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
            <Videolist list={list}/>
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