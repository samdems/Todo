import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {remove as TodoRemove} from '../services/Todo'
import bus from '../bus'
import TODO_EVENTS from '../events/todo';

type TodoProbs = {
    id:number
    name:string
}

export default function TodoList({id,name}:TodoProbs){
    async function remove(id:number):Promise<void> {
        await TodoRemove(id);
        bus.emit(TODO_EVENTS.REMOVE,id);
    }
    return (
            <Row className='pt-3' key={id}>
                <Col>{name}</Col>
                <Col><Button  onClick={_ => remove(id)} variant="outline-danger">remove</Button></Col>
            </Row>
    )
}