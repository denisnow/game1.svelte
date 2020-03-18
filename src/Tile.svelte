<script>
    import { afterUpdate } from 'svelte';
    import { positions, clickedTilePosition, isSorted } from './stores.js';

    export let number;

    let position,
        tile;

    const tileClickHandler = () => {
        if (tile.classList.contains('clickable')) $clickedTilePosition = position;
    };

    const doClickable = () => {
        if (!tile.classList.contains('clickable')) tile.classList.add('clickable');
    };

    const doUnclickable = () => {
        if (tile.classList.contains('clickable')) tile.classList.remove('clickable');
    };

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (!position || position.n !== $positions[number].n || position.m !== $positions[number].m) {
            position = $positions[number];
            tile.style.transform = 'translate(' + position.n*100 + '%, ' + position.m*100 + '%)';
        }
        if ($isSorted) doUnclickable();
        else {
            if (isClickable) doClickable();
            else doUnclickable();
        }
    } );
</script>

<div class='tileWrapper' bind:this={tile} on:click={tileClickHandler}>
    <div class='tile'>
        {number}
    </div>
</div>
