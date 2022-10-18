<script>
    import Video from "./video.svelte";
    import { list } from "../stores/videos.js";
    
    const handleRemove = event => {
        const id = event.detail.id
        $list = $list.filter(video => video.id !== id);
    }

</script>

<ul id="videoList--container">
    {#each $list as video}
        <Video {...video} on:remove={handleRemove}/>
    {/each}
</ul>

<style>
    #videoList--container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr) );
        gap: 20px;
        list-style-type: none;
    }

</style>
