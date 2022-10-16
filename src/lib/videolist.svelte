<script>
    import Video from "./video.svelte";
    import { list } from "../stores/videos.js";
    
    const handleRemove = event => {
        const id = event.detail.id
        $list = $list.filter(video => video.id !== id );
        console.log(id, 'removed');
    }
</script>

<div id="videoList--container">
    {#each $list as video}
        <Video {video} on:remove={handleRemove}/>
    {/each}
</div>

<style>
    #videoList--container {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>
