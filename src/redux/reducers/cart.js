import {ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS, REMOVEFROMCART} from '../actions/action-types';


const initialState = {
    items: [],
  };
  
  
export default function cart(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            return [...state, action.payload];
        case FETCH_CART_SUCCESS:
            return action.items;
        case REMOVEFROMCART:
            return state.filter(post => post._id !== action.payload.id);
        default:
            return state;
    }
}

