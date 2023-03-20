<script>
    import Modal from "../components/modal.svelte"
    import Input from "../components/input.svelte"
    import { redirect } from "@sveltejs/kit"
    import { goto } from "$app/navigation";

    export let data

    let signedin = false

    if(data?.user?.profile) {
        signedin = true
    }

    const signout = async () => {
        let x = await fetch('/signout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        });
        let z = await x.json()
        console.log(z);
        await goto('/login');
    }

</script>

<Modal/>

<div id="page--wrapper" class=" {signedin ? 'signedin' : 'signedout'}">

    <nav class=" {signedin ? 'loggedin' : 'loggedout'}">
        {#if data?.user?.profile}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- <img src="/signout.png" alt="signout" on:click|preventDefault={signout}> -->
            <form action="/signout" method="post">
                <button type="submit">signout</button>
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

    img {
        height: 100px;
        cursor: pointer;
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
    }
    

    nav a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
        padding: 1em;
    }

    nav img {
        margin-right: 50px;
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


    @media only screen and (max-width: 600px) {
        .signedin, .signedout {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            height: 100vh;
        }

        .signedin > nav {
            top: auto;
        }
    }

</style>