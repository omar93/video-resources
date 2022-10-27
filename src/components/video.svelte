<script>
    import { deleteVideo } from "../lib/helpers.js";
    import { modal, currentVideo } from '../lib/store.js'

    export let id = '1'
    export let videoID = 'youtube'
    export let imgUrl = 'https://i.ytimg.com/vi/1/hqdefault.jpg'
    export let videoUrl = 'https://www.youtube.com/watch?v=1'

    let buttonsVisability = false
    let isVideoClicked = false
    let mouseIsOnVideo = false

    const handleRemove = () => {
        deleteVideo('videos', id)
    }

    const videoClicked = () => {
        $modal = true
        currentVideo.set(videoID)
    }

    const handleZoomIn = () => {
        mouseIsOnVideo = true;
        buttonsVisability = true
    }

    const handleZoomOut = () => {
        mouseIsOnVideo = false;
        if(!isVideoClicked) {
            buttonsVisability = false
        }
    }

    const handleCheckBox = () => {
        isVideoClicked = !isVideoClicked
    }

</script>

<li id="video--container" on:mouseenter={handleZoomIn} on:mouseleave={handleZoomOut}>
    <img id="video--thumbnail"on:click={videoClicked} on:keypress={videoClicked} class={ mouseIsOnVideo  ? "zoomed--in" : 'zoomed--out' } src="{imgUrl}" alt="youtube thumbnail">
    <button id="remove--button" on:click|stopPropagation={handleRemove} class="{buttonsVisability ? "" : "invisible"}">X</button>
    <input class="{buttonsVisability ? "" : "invisible"}" type="checkbox" id="video--checkbox" on:click={handleCheckBox}>
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

    #video--checkbox {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 20px;
        height: 20px;
        accent-color: #c42323;
    }

    #video--thumbnail {
        cursor: pointer;
        height: 140%;
        width: 100%;
        border-radius: 1em;
        overflow:hidden;
        transition: transform 300ms;
        margin: -11% 0;
        display: inline-block;
    }

    .zoomed--in {
        transform: scale(1.4);
    }

    .zoomed--out {
        transform: scale(1);
    }

    .invisible {
        display: none;
    }

</style>