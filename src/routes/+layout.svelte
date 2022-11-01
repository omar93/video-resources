<script>
    import Modal from "../components/modal.svelte";
    import List from "../components/list.svelte";
    import Input from "../components/input.svelte";
    export let data
</script>

<div id="page--wrapper">
    <Modal/>
    <nav>
        <div class="signout--container">
            <a href="/">Home</a>
        </div>
        {#if data.profile}
            <div class="signout--container">
                <img id="signout--image" src="signout.png" alt="singout">
                <a href="/signout">Signout</a>
            </div>
        {:else}
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        {/if}
    </nav>
    

    {#if data.profile}
        <div id="list--container">
            <List/>
        </div>
    {/if}



    <div id="main--container">
        <div id="input--container">
            <Input/>
        </div>
        <slot></slot>
    </div>
</div>

<style>
    :global(:root) {
        font-family: sans-serif;
        padding: 0;
        margin: 0;
    }

    #page--wrapper {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows:  150px 1fr;
        grid-template-areas:
        'nav nav'
        'list main';
        flex-direction: column;
        
    }

    nav {
        grid-area: nav;
        font-size: 2em;
        display: flex;
        background: #eee;
    }

    nav a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
    }

    #list--container {
        grid-area: list;
    }

    #input--container {
        display: flex;
        justify-content: center;
    }

    #main--container {
        grid-area: main;
    }

    .signout--container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #signout--image {
        width: 1.5em;
        height: 1.5em;
        margin-left: 0.5em;
        cursor: pointer;
    }

</style>