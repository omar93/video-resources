<form method="post" action="?/register">

    <label for="name">Name</label>
    <input type="text" name="name" id="name">

    <label for="email">Email</label>
    <input type="text" name="email" id="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <label for="passwordConfirm">Confirm Password</label>
    <input type="password" name="passwordConfirm" id="passwordConfirm">

    <input id="submit" type="submit" value="Register">
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: auto;
        margin-top: 5%;
        padding: 2em;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 0px 7px 6px rgba(230,226,226,0.75);
        -webkit-box-shadow: 1px 0px 7px 6px rgba(230,226,226,0.75);
        -moz-box-shadow: 1px 0px 7px 6px rgba(230,226,226,0.75);
    }

    input {
        border: 1px solid rgb(153, 153, 153);
        padding: 14px 20px;
        border-radius: 4px;
    }

    input[type=submit] {
        background-color: rgb(8, 154, 221);
        padding: 14px 20px;
        border-radius: 4px;
        margin-top: 10%;
        color: white;
    }

    label {
        margin-top: 1rem;
    }

    input {
        margin-top: 0.5rem;
    }
</style>