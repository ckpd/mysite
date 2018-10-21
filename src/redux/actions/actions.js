import {ADD_TO_USER_SUCCESS,ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS } from './action-types';
import Axios from 'axios';
const apUrl = 'http://localhost:3000/tasks';
const cartUrl = 'http://localhost:3000/cart';


//export function addToCartSuccess(item) {
//    return {
//        type: ADD_TO_CART_SUCCESS,
//        item
//    }
//}

export function addToCart(items) {
    return {
        type: ADD_TO_CART_SUCCESS,
        items
    }
}

export function getCart(state, props) {
	var cartItems = JSON.parse(localStorage.getItem('cart'));
	return {
		items: cartItems ? cartItems.length : 0
	};
}
//
//export const addToCart = (cartData = {
//}) => {
//    return (dispatch) => {
//        return Axios.post(cartUrl, cartData)
//            .then(response => {
//                dispatch(addToCartSuccess(response));
//            }).catch(error => {
//                throw(error)
//            });
//    };
//};


// Sync load cart
//export function fetchCartSuccess(items){
//    return {
//      type: FETCH_CART_SUCCESS,
//      items
//    }
//  };
// 
//export function fetchCart() {
//    return (dispatch) => {
//        setTimeout(()=>{
//            Axios.get(cartUrl)
//            .then((response) => {
//                if (response.status !== 200) {
//                    throw Error(response.statusText);
//                }
//                return response;
//            })
//            .then((response) => dispatch(fetchCartSuccess(response.data)))
//            .catch(() => dispatch(itemsHaveError(true)));
//        },1000);
//       
//    };
//}



/**
 *  items page
 * 
 */
export function itemsHaveError(bool) {
    return {
        type: 'ITEMS_HAVE_ERROR',
        hasError: bool
    };
}

export function itemsAreLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        Axios.get(apUrl)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}