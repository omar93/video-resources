<script>
  import Startpage from "../components/startpage.svelte";
  export let data

</script>

{#if !data.profile}
  <span>Welcome, create an account to continue</span>
{:else}
  <Startpage/>
{/if}
