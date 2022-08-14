import {useState } from 'react';
import {Button,Row,Col,Form,InputGroup} from 'react-bootstrap' 
import {TodoType,create as TodoCreate } from '../services/Todo'
import bus from '../bus';
import TODO_EVENTS from '../events/todo'
const TodoTemplate:TodoType = {
        id:0,
        name: '',
};

export default function NewTodo(){
    const [todo, setTodo] = useState<TodoType>(TodoTemplate);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const target = event.target as HTMLInputElement;
        setTodo({...todo, name:target.value}); 
    }

    function handleKeyDown(e:any) {
        if (e.key === 'Enter') add();
    }

    async function add(){
        await TodoCreate(todo);
        setTodo(TodoTemplate);
        bus.emit(TODO_EVENTS.ADD,todo);
    }

    return (<Row className='pt-3'>
        <Col>
            <InputGroup className="mb-3">
                <Form.Control aria-label="name" value={todo.name} onChange={handleChange} onKeyDown={handleKeyDown}/>
            </InputGroup>
        </Col>
        <Col><Button onClick={_ => add()} >add</Button></Col>
    </Row>)

}