import data from '../../components/Data/Data';
import {SHOW_ITEM} from '../actions/action-types';

const initialState = {
    data: data,
  };

const rootReducer = (state = initialState, action) =>  {
    switch(action.type){
        case SHOW_ITEM:
            return{
                ...state,
                data: [
                    ...state.data,
                    action.items
                ]
            };
            default:
                return state; 
    }
}

export default rootReducer;

