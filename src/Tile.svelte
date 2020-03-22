<script>
    import { afterUpdate } from 'svelte';
    import { positions, isSorted } from './model/stores.js';
    import { move } from './model/actions.js';

    export let number;

    let position,
        tileWrapperElement;

    const tileClickHandler = () => {
        if (tileWrapperElement.classList.contains('clickable')) move(position);
    };

    const doClickable = () => {
        if (!tileWrapperElement.classList.contains('clickable')) tileWrapperElement.classList.add('clickable');
    };

    const doUnclickable = () => {
        if (tileWrapperElement.classList.contains('clickable')) tileWrapperElement.classList.remove('clickable');
    };

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (!position || position.n !== $positions[number].n || position.m !== $positions[number].m) {
            position = $positions[number];
            tileWrapperElement.style.transform = 'translate(' + position.n*100 + '%, ' + position.m*100 + '%)';
        }
        if ($isSorted) doUnclickable();
        else {
            if (isClickable) doClickable();
            else doUnclickable();
        }
    } );
</script>

<div class='tileWrapper' bind:this={tileWrapperElement}>
    <div class='tile' on:click={tileClickHandler}>
        {number}
    </div>
</div>
