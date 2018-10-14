import { combineReducers } from 'redux'
import {
  items,
  itemsHaveError,
  itemsAreLoading
} from './items'
import cart from './cart'


export default combineReducers({
  items,
  itemsHaveError,
  itemsAreLoading,
  cart
})
