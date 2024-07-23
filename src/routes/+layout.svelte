<script>
    import Modal from "../components/modal.svelte"
    import List from "../components/list.svelte"
    import Input from "../components/input.svelte"

    export let data

    let signedin = false

    if(data?.user) {
        signedin = true
    }
</script>

<Modal/>

<div id="page--wrapper" class=" {signedin ? 'layout1' : 'layout2'}">

    <nav>
        <a id="home" href="/">Home</a>
        {#if signedin}
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
    }

    .layout1 {
        display: flex;
        flex-direction: column;
    }

    .layout2 > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    nav {
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

    #input--container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>