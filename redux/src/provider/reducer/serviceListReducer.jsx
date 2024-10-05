import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../action/actionTypes'
const initialState = [
{id: nanoid(), name: 'Замена стекла', price: 21000, edit: false},
{id: nanoid(), name: 'Замена дисплея', price: 25000,  edit: false},

];
export default function serviceListReducer(state = initialState, action) {

    let filterValue;
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
           
            if ( state.find( (item) =>item.edit === true)) {
                state = state.map((item) => item.edit ? {...item, name, price, edit: false} : item);
                return state
            }
            state = [...state, {id: nanoid(), name, price:Number(price)}];
            return state
        
        case REMOVE_SERVICE:

            const {id} = action.payload;
            state = state.filter(service => service.id !== id);
            return  state
        
        case FILTER_SERVICE: 
            //вот здесь проблемка если я не сравниваю state с initState 
            //то фильтр почему-то после первого ввода значения в инпут
            // полностью стирает state и дальше выдает только пустой массив.
            //но сейчас тоже плохо работает, потому что не учитываются новыез значения.
            // пробовал копировать в доп массив и его фильтровать особо ничего не менялось
                state = initialState
                const {filterName} = action.payload;
                filterValue = filterName
            
                return state.filter(item => {
                    if(filterValue === ' ') {
                        return true
                    }
                    return item.name.includes(filterValue)
                })
                 
        default:

            return state;
}
}
