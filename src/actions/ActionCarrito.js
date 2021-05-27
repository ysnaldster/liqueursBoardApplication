import {types} from '../types/type'
// import { useFetch } from '../hooks/useFetch.jsx'


export const actionLicor = (producto) => {
    // const { loading, data } = useFetch(`https://api-licores.herokuapp.com/licores`);
    return{
        type: types.agregar,
        payload: producto
    }
}