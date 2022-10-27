<form method="post" action="?/login">

    <label for="email">Email</label>
    <input type="text" name="email" id="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="Login">
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    label {
        margin-top: 1rem;
    }

    input {
        margin-top: 0.5rem;
    }
</style>