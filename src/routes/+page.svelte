<script>
  import VideosGrid from "../components/videosGrid.svelte";
  export let data
</script>

<div id="main--content">
  {#if !data.profile}
    <span>Welcome, create an account & signin to continue</span>
  {:else}
    <div id="video--container">
      <VideosGrid/>
    </div>
  {/if}
</div>


<style>
  span {
    margin-top: 20%;
    font-size: 2em;
  }
</style>
