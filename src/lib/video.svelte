<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let id = '1'
    export let imgUrl = 'https://i.ytimg.com/vi/1/hqdefault.jpg'
    export let videoUrl = 'https://www.youtube.com/watch?v=1'

    let mouseIsOnVideo = false

    const handleRemove = () => {
        dispatch('remove', {id});
    }

    const playVideo = () => {
        console.log(videoUrl);
    }

    const handleZoomIn = () => {
        mouseIsOnVideo = true;
    }

    const handleZoomOut = () => {
        mouseIsOnVideo = false;
    }

</script>

<li id="video--container"  on:mouseenter={handleZoomIn} on:mouseleave={handleZoomOut}>
    <img id="video--thumbnail"on:click={playVideo} on:keypress={playVideo} class={ mouseIsOnVideo  ? "zoomed--in" : 'zoomed--out' } src="{imgUrl}" alt="youtube thumbnail">
    <button id="remove--button" on:click|stopPropagation={handleRemove}>X</button>
</li>


<style>

    #video--container {
        height: 100%;
        width: 100%;
        border: 1px solid black;
        border-radius: 1em;
        overflow: hidden;
        position: relative;
        transition: transform 300ms;
    }

    #remove--button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: rgb(146, 142, 142);
        color: white;
        border: none;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        font-size: 15px;
    }

    #video--thumbnail {
        cursor: pointer;
        height: 100%;
        width: 100%;
        border-radius: 1em;
        overflow:hidden;
        transition: transform 300ms;

    }

    .zoomed--in {
        transform: scale(1.2);
    }

    .zoomed--out {
        transform: scale(1);
    }

</style>