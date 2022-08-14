import * as express from 'express';
// import {TodoZog }from 'models/Todo';
import Model from '../models/Model';
import {ModelSchema} from '../models/Model';
class Controller{
        public model: any;
        public scheama = ModelSchema;
        public name = 'controller';
        constructor(router: express.Router){
                this.model = new Model();
                this.addroutes(router);
        }
        async list(req: express.Request, res: express.Response){
                const data = await this.model.getAll() as ModelSchema [];
                res.send(data);
        }
        async update(req: express.Request, res: express.Response){
                const id = Number(req.params.id);
                const data =  this.scheama.parse({id,...req.body});
                await this.model.update(data);
                res.send(204);
        }
        async read(req: express.Request, res: express.Response){
                const id = Number(req.params.id)
                const data = await this.model.get(id) as ModelSchema;
                if(!data) throw new Error(`${this.name} ${req.params.id} not found`);
                res.send(data);
        }
        async create (req: express.Request, res: express.Response){
                const data =  this.scheama.parse({id:0,...req.body});
                const status = await this.model.create(data);
                res.send({id:status});
        }
        async delete (req: express.Request, res: express.Response){
                const id = Number(req.params.id);
                const status = await this.model.delete(id);

                if(status === 0) throw new Error(`${this.name} ${req.params.id} not found`);
        
                res.send(204);
        }
        addroutes(router: express.Router){
                router.get("/todo", this.list.bind(this));
                router.post("/todo/", this.create.bind(this));
                router.get("/todo/:id", this.read.bind(this));
                router.post("/todo/:id", this.update.bind(this));
                router.delete("/todo/:id", this.delete.bind(this));
        }
}
export default Controller; 