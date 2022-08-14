import * as express from 'express';
// import {TodoZog }from 'models/Todo';
import Todo from '../models/Todo';
import {TodoSchema} from '../models/Todo';
import Controller from './Controller';
class TodoController extends Controller{
        public model: any;
        public scheama = TodoSchema;
        constructor(router: express.Router){
                super(router);
                this.model = new Todo();
        }
}
export default TodoController;