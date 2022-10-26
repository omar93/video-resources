<script>
    import { modal } from '../lib/store.js'
    const closeModal = () => {
        $modal = false
        console.log('AWSDADS');
    }
</script>

{#if $modal}
    <div id="backdrop" on:click|self={closeModal} on:keypress={closeModal}>
        <div id="modal">
            <div id="tabs">
                <span>X</span>
                <span>X</span>
            </div>
            <div id="content">
                <iframe id="video"
                    width="840" height="472.5" 
                    src="https://www.youtube.com/embed/Zs9Tifup1Bc" 
                    title="youtube video title" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
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

    #modal {
        width: 850px;
        height: 522.5px;
        background-color: white;
    }

    #tabs {
        background-color: white;
        position: relative;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: auto;
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

