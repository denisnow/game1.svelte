import { writable, derived } from 'svelte/store';
import makeMatrix from './makeMatrix.js';
import moveTiles from './moveTiles.js';

const matrix = writable(makeMatrix());

export const positions = derived( matrix, $matrix => {
    let positions = [];

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            positions[$matrix[i][j]] = {m:i, n:j};
    return positions;
} );

export const clickedTilePosition = writable(undefined);

clickedTilePosition.subscribe( position => {
    if (position) matrix.update( matrix => moveTiles(matrix, position) );
} );
