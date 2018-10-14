import data from '../../components/Data/Data.json';
import {
    ITEMS_HAVE_ERROR,
    ITEMS_ARE_LOADING,
    ITEMS_FETCH_DATA_SUCCESS
} from '../actions/action-types';

export function itemsHaveError(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAVE_ERROR':
            return action.hasError;
        default:
            return state;
    }
}
export function itemsAreLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}


