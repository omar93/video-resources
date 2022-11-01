<script>
  import VideosGrid from "../components/videosGrid.svelte";
  export let data
</script>

<div id="main--content">
  {#if !data.profile}
    <span>Welcome, create an account & signin to continue</span>
  {:else}
  <div id="videoGrid--container">
    <VideosGrid/>
  </div>
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
  #videoGrid--container {
    width: 96%;
    max-height: 80vh;
    overflow-y: scroll;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e4e4e4; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e4e4e4; 
  }
</style>
