<script>
  import VideosGrid from "../components/videosGrid.svelte";
  export let data
</script>

<div id="main--content">
  {#if !data.profile}
    <span>Welcome, create an account & signin to continue</span>
  {:else}
      <VideosGrid/>
  {/if}
</div>


<style>
  #main--content {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    margin-top: 20%;
    font-size: 2em;
  }
</style>
