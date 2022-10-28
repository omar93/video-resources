<script>
  import Startpage from "../components/startpage.svelte";
  export let data

</script>

{#if !data.profile}
  <span>Welcome, create an account & signin to continue</span>
{:else}
  <Startpage/>
{/if}

<style>
  span {
    margin-top: 20%;
    font-size: 2em;
  }
</style>
