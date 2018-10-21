import { combineReducers } from 'redux'
import {
    items,
    itemsHaveError,
    itemsAreLoading
} from './items'
import cart from './cart'


export default combineReducers({
    itemsHaveError,
    itemsAreLoading,
    cart,
    items
})
