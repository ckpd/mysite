import {ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS, REMOVEFROMCART} from '../actions/action-types';


const initialState = {
    items: [],
  };
  
  
export default function cart(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            
            var cartState = JSON.parse(localStorage.getItem('cart'));
                cartState = cartState ? cartState : [];
                localStorage.setItem('cart', JSON.stringify([...cartState, action.item]));
            return {
                items: JSON.parse(localStorage.getItem('cart'))
            };
//            return [...state, action.payload];

        case FETCH_CART_SUCCESS:
            return action.items;
        case REMOVEFROMCART:
            var cartData = JSON.parse(localStorage.getItem('cart'));
            state = cartData.filter(cartData, function (item) {
                return item.id !== action.id
            });
            localStorage.setItem('cart', JSON.stringify(state));
            return {
                items : state
            };
//            return state.filter(post => post._id !== action.payload.id);
        default:
            return state;
    }
}




