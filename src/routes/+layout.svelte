<script>
    import Modal from "../components/modal.svelte"
    import Input from "../components/input.svelte"

    export let data

    let signedin = false

    if(data?.user?.profile) {
        signedin = true
    }

</script>

<Modal/>

<div id="page--wrapper" class=" {signedin ? 'signedin' : 'signedout'}">

    <nav class=" {signedin ? 'loggedin' : 'loggedout'}">
        {#if data?.user?.profile}
            <form action="/signout" method="post">
                <button id="signout--button" type="submit">Signout</button>
            </form>
        {:else}
            <a id="home" href="/">Home</a>
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

    .signedin {
        display: flex;
        flex-direction: column;
    }

    .signedout > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    nav {
        display: flex;
        justify-content: flex-end;
        font-size: 2em;
        display: flex;
        background: #eee;
        height: 50px;
        padding: 1em;
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
        margin-top: -20px;
    }

    #input--container {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    @media only screen and (max-width: 750px) {
        .signedin, .signedout {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            height: 100vh;
        }

        .signedin > nav {
            top: auto;
        }

        .loggedout {
            display: flex;
            justify-content: flex-end;
        }
    }

</style>