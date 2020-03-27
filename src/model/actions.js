import { matrix } from './stores.js';
import makeMatrix from './helpers/makeMatrix.js';
import moveTiles from './helpers/moveTiles.js';

export const shuffle = () => matrix.set(makeMatrix());

export const move = (position) => {
    matrix.update( matrix => moveTiles(matrix, position) );
};
