<script>
    import Videolist from "./lib/videolist.svelte";
    import { list } from "./stores/videos.js";

    let inputValue = ''
    let counter = 0

    const handleSubmit = _ => {
        let youtubeID = inputValue.split('v=')[1]
        let imageHandler =  `https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`
        $list = [...$list, {id: counter.toString(), url: imageHandler}]
        counter++
    }
</script>

<div id="main--container">

    <form id="link--form" on:submit|preventDefault={handleSubmit}>
        <input type="text" name="link" placeholder="Youtube Link" bind:value={inputValue}/>
    </form>
<hr>
    <div id="video--container">
        <Videolist/>
    </div>

</div>

<style>
    #main--container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    #video--container {
        height: 70%;
        width: 60%;
    }
</style>