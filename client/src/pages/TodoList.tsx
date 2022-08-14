import {useEffect,useState } from 'react';
import {TodoType,getAll} from '../services/Todo'
 
import bus from '../bus'
import TODO_EVENTS from '../events/todo';

import NewTodo from '../components/newTodo';
import Todo from '../components/todo';



export default function TodoList(){
    const [todos, setTodos] = useState<TodoType[]>([]);

    async function load(){
        const value = await getAll()
        setTodos(value)
    }
    useEffect(() => {
        load();
        bus.on(TODO_EVENTS.ADD,load);
        bus.on(TODO_EVENTS.REMOVE,load);
    },[])

    return (
    <div>
        <h2>Todo List</h2>
            {todos.map((todo) => (
               <Todo name={todo.name} id={todo.id}></Todo> 
            ))} 
        <NewTodo></NewTodo>
    </div>);
}