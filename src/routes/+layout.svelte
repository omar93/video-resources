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
                <button type="submit">Signout</button>
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
    }

    nav {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
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
        width: 90%;
    }
</style>