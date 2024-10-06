import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../provider/action/actionCreators';
import { List, Button } from 'antd';

export default function ServiceList() {
    const filter = useSelector(state => state.serviceList.filters.filterValue);
    const items = useSelector(state => state.serviceList.items);
    

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
        
        <List
            className='service-list'
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item) => {
                    if(item.name.includes(filter)) {
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.name}
                                    description={item.price}
                                />
                                <Button onClick={() => handleRemove(item.id)}>✕</Button>
                                <Button onClick={() => handleEdit(item)} >Edit</Button>
                            </List.Item>
                            )
                    }   
        }
        }
        />
)
}

