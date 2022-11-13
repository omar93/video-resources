<script>
    import ListItem from "./listItem.svelte";
    import { listsStore } from "../lib/store";
    import { v4 as uuid } from 'uuid';

    const handleClick = () => {
        currentListStore.set(list);
    }

</script>

<ul>
    {#each $listsStore as item}
        <ListItem {item} id={uuid()}/>
    {/each}
</ul>

<div id="menu--container">
    <button on:click={handleClick}>new list</button>
</div>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        height: 90%;
        overflow-wrap: break-word;
        border-right: 1px solid #eee;
    }

    #menu--container {
        border: 1px solid #eee;
        height: 10%;
    }
</style>