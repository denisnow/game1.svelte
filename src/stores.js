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

// ==================== MOVING TILES ====================

export const clickedTilePosition = writable(undefined);

clickedTilePosition.subscribe( position => {
    if (position) matrix.update( matrix => moveTiles(matrix, position) );
} );

// ================= CHECKING IS SORTED =================

export const isSorted = writable(false);

positions.subscribe( positions => {
    if (positions[0].n === 3 && positions[0].m === 3) {
        for (let i = 15; i > 0; i--) {
            let m = Math.floor((i-1)/4),
                n = i-1-(m*4);

            if (positions[i].m !== m || positions[i].n !== n) return;
            if (i === 1) isSorted.set(true);
        }
    }
} );
