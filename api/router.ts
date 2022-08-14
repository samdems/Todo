import PromiseRouter from 'express-promise-router'
import TodoController from './controllers/TodoController';
const router = PromiseRouter();

const todoController = new TodoController(router);
router.use((req, res) => {
    res.send(404)
})
export default router;