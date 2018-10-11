import { ADDTOCART,SHOW_ITEM, ISINCART, TOTAL } from './action-types';



export const showItem = (item) => {
    return {
        type: SHOW_ITEM, 
        item
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL'
}

export function addToCart( objectId) {
    return {
        type: ADDTOCART,
        item: {
            objectId : objectId
        }
    }
}

export const incrementQuantityInCart = (objectId) => ({
    type: TOTAL,
    objectId,
  })
