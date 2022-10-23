<nav>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
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