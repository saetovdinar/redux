import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducer/serviceListReducer';
import serviceAddReducer from '../reducer/serviceAddReducer';

const reducer = combineReducers({
serviceList: serviceListReducer,
serviceAdd: serviceAddReducer,
});
const store = createStore(reducer);
export default store;