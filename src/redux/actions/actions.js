import { ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS } from './action-types'
import Axios from 'axios';
const url = 'https://5bc254b6ce72500013c2a5c9.mockapi.io/v1/cart';


export function addToCartSuccess(item) {
    return {
        type: ADD_TO_CART_SUCCESS,
        item
    }
}

export const addToCart = (item) => {
    return (dispatch) => {
      return Axios.post(url, item)
        .then(response => {
          dispatch(addToCartSuccess(response.data))
          console.log(response.data)

        })
        .catch(error => {
          throw(error);
        });
    };
  };


// Sync load cart
export function fetchCartSuccess(items){
    return {
      type: FETCH_CART_SUCCESS,
      items
    }
  };
 
export function fetchCart() {
    return (dispatch) => {

        Axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => dispatch(fetchCartSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}



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

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        Axios.get(url)
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