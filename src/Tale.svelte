<script>
    import { afterUpdate } from 'svelte';

    export let number, index;

    let tile;
    $: i = Math.floor(index/4);
    $: j = index-(i*4);

    afterUpdate( () => tile.style.transform = "translate(" + j*100 + "%, " + i*100 + "%)" );
</script>

<div class='tileWrapper' bind:this={tile}>
    <div class='tile'>
        {number}
    </div>
</div>