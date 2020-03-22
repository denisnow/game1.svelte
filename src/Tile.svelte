<script>
    import { afterUpdate } from 'svelte';
    import { positions, clickedTilePosition, isSorted } from './model/stores.js';

    export let number;

    let position,
        thisElement;

    const tileClickHandler = () => {
        if (thisElement.classList.contains('clickable')) $clickedTilePosition = position;
    };

    const doClickable = () => {
        if (!thisElement.classList.contains('clickable')) thisElement.classList.add('clickable');
    };

    const doUnclickable = () => {
        if (thisElement.classList.contains('clickable')) thisElement.classList.remove('clickable');
    };

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (!position || position.n !== $positions[number].n || position.m !== $positions[number].m) {
            position = $positions[number];
            thisElement.style.transform = 'translate(' + position.n*100 + '%, ' + position.m*100 + '%)';
        }
        if ($isSorted) doUnclickable();
        else {
            if (isClickable) doClickable();
            else doUnclickable();
        }
    } );
</script>

<div class='tileWrapper' bind:this={thisElement} on:click={tileClickHandler}>
    <div class='tile'>
        {number}
    </div>
</div>
