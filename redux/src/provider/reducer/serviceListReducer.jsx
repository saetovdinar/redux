import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../action/actionTypes';

const initialState = {
    items : [
        {id: nanoid(), name: 'Замена стекла', price: 21000, edit: false, filterValue: ''},
        {id: nanoid(), name: 'Замена дисплея', price: 25000,  edit: false, filterValue: ''},
        
        ],
    filters: {
        filterValue: ''
    }
}


export default function serviceListReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
           
            if ( state.items.find( (item) =>item.edit === true)) {
                
                return  {
                    ...state,
                    items: [...state.items.map((item) => item.edit ? {...item, name, price, edit: false} : item)]
                }
            }
            return {
                ...state,
                items: [...state.items, {id: nanoid(), name, price:Number(price)}]
            }
        case FILTER_SERVICE: 
            
            const {filterName} = action.payload;
            return  {
                ...state,
                filters: {...state.filters, filterValue: '' + filterName}
            }

        case REMOVE_SERVICE:

            const {id} = action.payload;
          
            return {
                ...state,
                items: [...state.items.filter(service => service.id !== id)]
            }
        
        
                 
        default:

            return state;
}
}
