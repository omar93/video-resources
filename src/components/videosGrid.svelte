<script>
    import { videoStore } from "../lib/store";
    import Video from "./video.svelte";
</script>

<ul id="videoList--container">
    {#each $videoStore as video}
        <div id="li">
            <Video {...video}/>
        </div>
    {/each}
</ul>

<style>
    #videoList--container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>