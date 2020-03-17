<script>
    import { afterUpdate } from 'svelte';
    import { positions, clickedTilePosition } from './stores.js';

    export let number;

    let position,
        tile;

    const tileClickHandler = () => {
        if (tile.classList.contains('clickable')) $clickedTilePosition = position;
    }

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (!position || position.n !== $positions[number].n || position.m !== $positions[number].m) {
            position = $positions[number];
            tile.style.transform = 'translate(' + position.n*100 + '%, ' + position.m*100 + '%)';
        }
        if (isClickable) {
            if (!tile.classList.contains('clickable')) tile.classList.add('clickable');
        }
        else if (tile.classList.contains('clickable')) tile.classList.remove('clickable');
    } );
</script>

<div class='tileWrapper' bind:this={tile} on:click={tileClickHandler}>
    <div class='tile'>
        {number}
    </div>
</div>
