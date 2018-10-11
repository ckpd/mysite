import {ADDTOCART, REMOVEFROMCART} from '../actions/action-types';


const addItem = (state = {}, action )=>{
    let quantity = 0;
    if(state[action.item.objectId] !== undefined)
        quantity = state[action.item.objectId].quantity
        let newState = {}
        for(let key in state){
            newState[key]={...state[key]}
            }
            newState[action.item.objectId] = {
                quantity: quantity + 1,
                objectId: action.item.objectId
            }
    return newState
}



export default function cart(state = {}, action = {}){
    switch(action.type){
        case ADDTOCART:
        //    return handleCartAdd(state, action.payload);
           return addItem(state, action);
        case REMOVEFROMCART:
            // return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

// function handleCartAdd(state, payload){
//     return {
//         items: [ 
//             ...state.items, 
//             payload.objectId

//         ]
//     }
// }


// function handleCartRemove(state, payload){
//     return {
//         ...state,
//         item: state.item.filter(objectId => objectId != payload.objectId)
//     }
// };
