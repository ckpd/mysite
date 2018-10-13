import { ADDTOCART } from './action-types';

export function addToCart( items) {
    return {
        type: ADDTOCART,
        items
    }
}
