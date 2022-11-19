<script>
    import { getVideos, saveVideos } from "../lib/helpers";
    import { onMount } from 'svelte';
    
    onMount(() => getVideos())
    
    let inputValue = ''
    
    const handleNewVideoSubmit = async () => {
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify(inputValue),
            headers: {
                'content-type': 'application/json'
            }
        });

        let res = await response.json()
        console.log(res);
    }

</script>

<form on:submit|preventDefault={handleNewVideoSubmit} id="link--form">
    <label for="link">Add a new youtube video</label>
    <input id="link--input" type="text" name="link" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" bind:value={inputValue}/>
</form>

<style>
    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2em;
        width: 500px;
    }

    #link--input {
        outline: none;
        border:none;
        text-align: center;
        height: 30px;
        border-radius: 5px;
        width: 500px;
        background-color: rgb(206, 206, 206);
    }
</style>