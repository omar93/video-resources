<script>
    import Modal from "../components/modal.svelte";
    import List from "../components/list.svelte";
    import Input from "../components/input.svelte";

    export let data

    let signedin = false

    if(data?.user?.profile) {
        signedin = true
    }

</script>

<Modal/>

<div id="page--wrapper" class=" {signedin ? 'layout1' : 'layout2'}">

    <nav>
        <a id="home" href="/">Home</a>
        {#if data?.user?.profile}
            <form method="POST" class="spacer" action="/signout">
                <button id="signout--button" type="submit">Signout</button>
            </form>
        {:else}
            <div class="spacer">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        {/if}
    </nav>
    
    {#if data?.user?.profile}
        <div id="list--container">
            <List/>
        </div>


        <div id="input--container">
            <Input/>
        </div>

    {/if}
    
    <div id="slot--container">
        <slot></slot>
    </div>

</div>

<style>
    :global(:root) {
        font-family: sans-serif;
        padding: 0;
        margin: 0;
        max-height: 50vh;
    }

    .layout1 {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows:  75px 100px 1fr;
        grid-template-areas:
        'nav    nav'
        'list   input'
        'list   slot';
    }

    .layout2 > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    nav {
        grid-area: nav;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        display: flex;
        background: #eee;
    }

    nav a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
        padding: 1em;
    }

    .spacer {
        margin-left: auto;
    }

    #signout--button {
        background: none;
        border: none;
        color: #333;
        font-weight: bold;
        font-size: 1em;
        padding: 1em;
        cursor: pointer;
    }

    #list--container {
        grid-area: list;
        border-right: 1px solid #eee;
        height: 92vh;
    }

    #input--container {
        display: flex;
        justify-content: center;
    }

    #slot--container {
        grid-area: slot;
    }

</style>