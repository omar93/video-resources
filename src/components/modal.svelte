<script>
    import { modal, currentVideo } from '../lib/store.js'

    const closeModal = () => $modal = false
    
    let id, title
    let renderNow = false
        
    currentVideo.subscribe(video => {
        if(video) {
            id = video.url.split('v=')[1]
            title = video.title
            renderNow = true
        }
    })


</script>

{#if $modal}
    <div id="backdrop" on:click|self={closeModal} on:keypress={closeModal}>
        <div id="modal">
            <div id="tabs">
                <span id="title">{title}</span>
                <span id="close--button" on:click|self={closeModal} on:keypress={closeModal}>X</span>
            </div>
            <div id="content">
                {#if renderNow}
                    <iframe id="video"
                        width="840" height="472.5" 
                        src="https://www.youtube.com/embed/{id}" 
                        title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                {/if}

            </div>

        </div>

    </div>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    #title {
        font-size: 1em;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 5px;
    }

    #backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #tabs {
        background-color: white;
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
    }

    #close--button {
        margin-left: auto;
        margin-right: 10px;
        font-size: 25px;
        font-weight: 600;
        cursor: pointer;
        width: 30px;
        height: 30px;
        text-align: center;
    }

    #close--button:hover {
        background-color: rgb(187, 182, 174);
        border-radius: 20%;
    }

    #content {
        background-color: white;
        width: 850px;
        height: 480px;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

