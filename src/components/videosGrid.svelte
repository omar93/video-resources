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
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        list-style-type: none;
        gap: 1em;
        row-gap: 3em;
        padding: 1em;
        width: 100%;
    }
</style>