import {types} from '../types/type'

const inicialState = {
    licores: []
}


export default function (state = inicialState,action){
    switch (action.types) {
        case types.agregar:
              return{
                //   Se mantienen los valores de los productos 
                    ...state,
                    licores: [...state.licores, action.payload]
              }
        default:
            return state;
    }
}