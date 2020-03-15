<script>
    import { afterUpdate } from 'svelte';

    export let number, position;

    let tile;

    afterUpdate( () => tile.style.transform = "translate(" + position.n*100 + "%, " + position.m*100 + "%)" );
</script>

<div class='tileWrapper' bind:this={tile}>
    <div class='tile'>
        {number}
    </div>
</div>