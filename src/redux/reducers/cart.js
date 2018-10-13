import {ADDTOCART, REMOVEFROMCART} from '../actions/action-types';

const initialState = {
    items: []
  };




export default function cart(state = initialState, action){
    switch(action.type){
        case ADDTOCART:
           return handleCartAdd(state, action.payload);
        case REMOVEFROMCART:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload){
    return {
        items: [ 
            ...state.items, 
            payload.objectId

        ]
    }
}


function handleCartRemove(state, payload){
    return {
        ...state,
        item: state.item.filter(objectId => objectId !== payload.objectId)
    }
};
