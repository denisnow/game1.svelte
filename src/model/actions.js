import { matrix } from './stores.js';
import makeMatrix from './functions/makeMatrix.js';
import moveTiles from './functions/moveTiles.js';

export const shuffle = () => matrix.set(makeMatrix());

export const move = (position) => {
    matrix.update( matrix => moveTiles(matrix, position) );
};
