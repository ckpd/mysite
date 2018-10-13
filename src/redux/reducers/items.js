import data from '../../components/Data/Data.json';
import {SHOW_ITEM} from '../actions/action-types';

const initialState = {
    cars: data.cars,
  };

const rootReducer = (state = initialState, action) =>  {
    switch(action.type){
        case SHOW_ITEM:
            return{
                ...state,
                cars: [
                    ...state.data,
                    action.items
                ]
            };
            default:
                return state; 
    }
}

export default rootReducer;

