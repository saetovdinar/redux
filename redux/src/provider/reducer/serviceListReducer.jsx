import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../action/actionTypes'
const initialState = [
{id: nanoid(), name: 'Замена стекла', price: 21000, edit: false},
{id: nanoid(), name: 'Замена дисплея', price: 25000,  edit: false},
];
export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
           
            if ( state.find( (item) =>item.edit === true)) {
                
                return state.map((item) => item.edit ? {...item, name, price, edit: false} : item);
            }
            return [...state, {id: nanoid(), name, price:Number(price)}];
        
        case REMOVE_SERVICE:

            const {id} = action.payload;

            return state.filter(service => service.id !== id);
        
        case FILTER_SERVICE:

                const {filterName} = action.payload;
                if(filterName === '') {
                    return state
                }
                const temporaryCopy = Array.from(state);
                return temporaryCopy.filter(item => item.name.includes(filterName) );
            
        default:

            return state;
}
}
