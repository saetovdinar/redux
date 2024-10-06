import {useSelector, useDispatch} from 'react-redux';
import {addService, changeServiceField, filterService} from '../provider/action/actionCreators';
import { Button, Form, Input, Space } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 15 },
  };
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
    
        
         <Form className='container' onSubmitCapture={handleSubmit} {...layout}  name="control-hooks"  style={{ maxWidth: 600 }}>
            <Form.Item  label="Name" >
                <Input name='name' value={items.name} onChange={handleChange} />
            </Form.Item>
            <Form.Item  label="Price" >
                <Input name='price' value={items.price} onChange={handleChange} />
            </Form.Item>             
            <Form.Item >
                <Space>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                    <Button onClick={handleCancel} htmlType="button" >
                        Cancel
                    </Button>
                </Space>
            </Form.Item>
            <Form.Item  label="Search" >
                <Input name='Search'   onChange={handleChangeFilter}  />
            </Form.Item> 
        </Form>
         
           
   
           

    );
}

