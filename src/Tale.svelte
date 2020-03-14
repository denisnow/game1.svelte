<script>
    export let number;

    let tile;
    let i = Math.floor((number-1)/4),
        j = number-1-(i*4);

    queueMicrotask( () => tile.style.transform = "translate(" + j*100 + "%, " + i*100 + "%)" );
</script>

<div class='tileWrapper' bind:this={tile}>
    <div class='tile'>
        {number}
    </div>
</div>