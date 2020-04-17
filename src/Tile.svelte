<script>
    import tabIndexSetter from './tabIndexSetter.js';

    export let number, isMovable, tabIndex, positionN, positionM;
</script>

<div
    class='tileWrapper'
    style='transform:translate({100*positionN}%, {100*positionM}%)'
>
    <div
        class='tile'
        class:responsive={isMovable}
        use:tabIndexSetter={tabIndex}
    >
        {number}
    </div>
</div>
