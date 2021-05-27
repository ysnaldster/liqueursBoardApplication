import {types} from '../types/type'

const inicialState = {
    licores: []
}


export default function (state = inicialState,action){
    switch (action.type) {
        case types.agregar:
              return{
                //   Se mantienen los valores de los productos 
                    ...state,
                    licores: [...state.licores, action.payload]
              }

        case types.borrar: 
            return{
                ...state, 
                licores: state.licores.filter(licores => licores.id !== action.payload)
            }
        default:
            return state;
    }
}