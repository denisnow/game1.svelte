<script>
    import { afterUpdate } from 'svelte';
    import { positions } from './stores.js';

    export let number;

    let tile, position;
    
    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (!position || position !== $positions[number]) {
            position = $positions[number];
            tile.style.transform = 'translate(' + position.n*100 + '%, ' + position.m*100 + '%)';
        }
        if (isClickable && !tile.classList.contains('clickable')) tile.classList.add('clickable');
        else if (!isClickable && tile.classList.contains('clickable')) tile.classList.remove('clickable');
    } );
</script>

<div class='tileWrapper' bind:this={tile}>
    <div class='tile'>
        {number}
    </div>
</div>