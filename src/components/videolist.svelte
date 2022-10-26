<script>
    import { videoStore } from "../lib/store";
    import Video from "./video.svelte"; 
</script>

<ul id="videoList--container">
    {#each $videoStore as video}
    {console.log("list render; ", video)}
        <Video {...video}/>
    {/each}
</ul>

<style>
    #videoList--container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.2fr) );
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
        list-style-type: none;
    }
</style>