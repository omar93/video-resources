<script>
    import { videoStore } from "../lib/store";
    import Video from "./video.svelte"; 
</script>

<ul id="videoList--container">
    {#each $videoStore as video}
        <Video {...video}/>
    {/each}
</ul>

<style>
    #videoList--container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 0.1fr) );
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
        list-style-type: none;
    }
</style>