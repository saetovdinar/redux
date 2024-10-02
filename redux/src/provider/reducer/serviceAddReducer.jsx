import {CHANGE_SERVICE_FIELD, EDIT_SERVICE} from '../action/actionTypes'


const initialState = { name: '', price: '', };
export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case EDIT_SERVICE:
            const { title, price} = action.payload;
            return { name: title, price: price};
            
        default:
            return state;
        }
}