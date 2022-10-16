<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let video = {
        id: '1',
        url: 'https://i.ytimg.com/vi/1/hqdefault.jpg'
    }

    const handleRemove = () => {
        dispatch('remove', {id:video.id});
    }

</script>


<div id="video--container">
    <button id="remove--button" on:click={handleRemove}>X</button>
    <div id="video--thumbnail" style="background-image: url({video.url});"></div>
</div>

<style>

    #video--container {
        height: 350px;
        width: 450px;
        border: 1px solid black;
        border-radius: 1em;
        position: relative;
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
        height: 100%;
        width: 100%;
        border-radius: 1em;
        object-fit:scale-down;
    }

</style>