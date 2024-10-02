import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../provider/action/actionCreators';


export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
 
    const dispatch = useDispatch();
    const handleRemove = id => {
 
        dispatch(removeService(id));
    }

    const handleEdit = item => {
        items.forEach(function (o) {
            if (o.id === item.id) {
                o.edit = true;
            }
        }
           )
        dispatch(editService( item.name, item.price));
    }

    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                    <button onClick={() => handleEdit(o)} type='button'>Edit</button>
                </li>
            ))}
        </ul>
)
}