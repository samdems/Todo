import db from '../db'
import z from 'zod'

export const ModelSchema = z.object({
      id: z.number(),
  });

export type ModelSchema = z.infer<typeof ModelSchema>; 

export default class Model {
  public table = 'Model';

  async getAll(): Promise<ModelSchema[]>{
    return db(this.table).select('*');
  }
  async get(id: number):Promise<ModelSchema>{
    return db(this.table).where('id',id).first();
  }
  async update(data:ModelSchema):Promise<number>{
    const status = db(this.table).update(data);
    return status;
  }
  async create(data:ModelSchema):Promise<number>{
    
    return db(this.table).insert(data);
  }  
  async delete(id: number) {
    return db(this.table).where('id',id).delete();
  }
  }