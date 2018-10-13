import { ADDTOCART } from './action-types';

export function addToCart( objectId) {
    return {
        type: ADDTOCART,
        items: {
            objectId : objectId
        }
    }
}
