<script>
  import Startpage from "../lib/startpage.svelte";
  export let data

  export let form
</script>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back</p>
{/if}

<span>Welcome {data.email}</span>

<Startpage/>