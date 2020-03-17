<script>
    import { afterUpdate } from 'svelte';
    import { positions } from './stores.js';

    export let number;

    let tile, position;
    
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

<div class='tileWrapper' bind:this={tile}>
    <div class='tile'>
        {number}
    </div>
</div>
