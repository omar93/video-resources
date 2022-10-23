<form method="post" action="?/register">

    <label for="name">Name</label>
    <input type="text" name="name" id="name">

    <label for="email">Email</label>
    <input type="text" name="email" id="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <label for="passwordConfirm">Confirm Password</label>
    <input type="password" name="passwordConfirm" id="passwordConfirm">

    <input type="submit" value="Register">
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