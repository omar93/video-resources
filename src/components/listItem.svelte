<script>
    import { currentListStore } from "../lib/store";

    export let item
    export let id

    const handleClick = () => {
        currentListStore.set({
            item,
            id
        });
        console.log(item,id);
    }
</script>

<li>
    <span on:click={handleClick} on:keypress={handleClick}>{item}</span>
</li>

<style>
    li {
        padding: 1em;
        font-size: 1.5em;
        max-width: 100%;
        overflow: wrap;
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }
</style>