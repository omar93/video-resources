<script>
    import Modal from "../components/modal.svelte";
    import List from "../components/list.svelte";
    export let data
</script>

<Modal/>

<div id="page--wrapper">

    <nav>
        <a href="/">Home</a>
        {#if data.profile}
            <form method="POST" action="/signout">
                <div id="signout--container">
                    <button type="submit">Signout</button>
                    <img id="signout--image" src="signout.png" alt="singout">
                </div>
            </form>
        {:else}
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        {/if}
    </nav>

    <div id="main--wrapper">
        {#if data.profile}
            <div id="list--content">
                <List/>
            </div>
        {/if}
        <div id="main--content">
            <slot></slot>
        </div>
    </div>


</div>

<style>

    #page--wrapper {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        background-color: rgb(206, 206, 206);
    }

    nav {
        font-family: sans-serif;
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;
        padding: 1.2em;
        background: #eee;
    }

    nav a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
    }

    #main--wrapper {
        display: flex;
    }

    #list--content {
        width: 10%;
    }

    #main--content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(206, 206, 206);
    }

    #signout--image {
        width: 1.5em;
        height: 1.5em;
        margin-left: 0.5em;
        margin-top: 10px;
    }

    button {
        border-style: none;
        font-size: 35px;
        font-family: sans-serif;
    }
</style>