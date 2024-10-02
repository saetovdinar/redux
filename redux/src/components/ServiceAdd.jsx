import {useSelector, useDispatch} from 'react-redux';
import {addService, changeServiceField, filterService} from '../provider/action/actionCreators';

export default function ServiceAdd() {

 
    const items = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = (evt) => {   
        const {name, value} = evt.target;
      
        dispatch(changeServiceField(name, value));   
       
    }

    const handleChangeFilter = (evt) => {   
   
        dispatch(filterService(evt.target.value));
        
       
       
    }

    const handleSubmit = (evt) => {   
        evt.preventDefault();
        dispatch(addService(items.name, items.price));   
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    const handleCancel = (evt) => {   
        evt.preventDefault();
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }
    return (
    
          
             
            <form onSubmit={handleSubmit}>
                <input name='name' onChange={handleChange} value={items.name} />
                <input name='price' onChange={handleChange} value={items.price} />
                <button type='submit'>Save</button>
                <button onClick={handleCancel} type='button'>Cancel</button>
                <input onChange={handleChangeFilter} name='name'   />
            </form>

    );
}