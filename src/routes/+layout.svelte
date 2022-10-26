<script>
    import Modal from "../components/modal.svelte";
    export let data
</script>

<Modal/>

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
  
<slot></slot>

<style>
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
</style>