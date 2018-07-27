import {actionTypes} from '../actions/tarjetas';

const defaultState = [];

export const  tarjetasReducer = (state = defaultState, action) => {
     switch (action.type) {
         case actionTypes.ADD:
            return [...state,action.tarjeta]
         default: return state;
     }
 }