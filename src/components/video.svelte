<script>
    import { deleteVideo } from "../lib/helpers.js";
    import { modal, currentVideo } from '../lib/store.js'

    export let id, img, url, title

    let buttonsVisability = false
    let isVideoClicked = false
    let mouseIsOnVideo = false

    const handleRemove = () => {
        deleteVideo('videos', id)
    }

    const videoClicked = () => {
        $modal = true
        currentVideo.set({url,title})
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
    <div id="title--container">
        <span>{title}</span>
    </div>
    <img id="video--thumbnail"on:click={videoClicked} on:keypress={videoClicked} class={ mouseIsOnVideo  ? "zoomed--in" : 'zoomed--out' } src="{img}" alt="youtube thumbnail">
    <button id="remove--button" on:click|stopPropagation={handleRemove} class="{buttonsVisability ? "" : "invisible"}">X</button>
    <input class="{buttonsVisability ? "" : "invisible"}" type="checkbox" id="video--checkbox" on:click={handleCheckBox}>
</li>

<style>

    #video--container {
        height: 187.5px;
        width: 280px;
        border-radius: 1em;
        overflow: hidden;
        position: relative;
        transition: transform 300ms;
    }

    #title--container {
        position: absolute;
        top: 80%;
        left: 0;
        width: 100%;
        height: 20%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 15px;
        text-align: center;
        padding: 1px;
        font-weight: bold;
        opacity: 1;
        transition: opacity 300ms;
        z-index: 1;
        overflow: hidden;
    }

    span {
        padding: 5px;
    }

    #remove--button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: rgba(255, 0, 0, 0.589);
        color: white;
        border: none;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        font-size: 15px;
    }

    #remove--button:hover {
        background-color: rgba(255, 0, 0, 0.75);
    }

    #remove--button:active {
        background-color: rgb(255, 0, 0);
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
        transition: transform 400ms;
        margin: -12% 0;
        display: inline-block;
    }

    .zoomed--in {
        transform: scale(1.1);
    }

    .zoomed--out {
        transform: scale(1);
    }

    .invisible {
        display: none;
    }

</style>