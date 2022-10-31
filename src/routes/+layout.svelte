<script>
    import Modal from "../components/modal.svelte";
    import List from "../components/list.svelte";
    import Input from "../components/input.svelte";
    export let data
</script>

<Modal/>

<div id="page--wrapper">
    <nav>
        <div class="signout--container">
            <a href="/">Home</a>
        </div>
        {#if data.profile}
            <div class="signout--container">
                <img id="signout--image" src="signout.png" alt="singout">
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

    <div id="input--container">
        <Input/>
    </div>

    <div id="main--container">
        <slot></slot>
    </div>
</div>

<style>
    * {
        font-family: sans-serif;
    }

    #page--wrapper {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 100px 100px 1fr;
        grid-template-columns: 200px 1fr;
        grid-template-areas: 
        'nav    nav'
        'list   input'
        'list   main';
        background-color: rgb(206, 206, 206);
    }

    nav {
        grid-area: nav;
        font-size: 1.5em;
        display: flex;
        padding: 1.2em;
        background: #eee;
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
    }

    nav a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
    }

    #list--container {
        grid-area: list;
        position: sticky;
        width: 200px;
        outline: 3px solid red;
    }

    #input--container {
        grid-area: input;
        display: flex;
        justify-content: center;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
    }

    #main--container {
        grid-area: main;
        min-height: 100%;
        min-width: 100%;
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