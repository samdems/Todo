import db from '../db'
import z from 'zod'
import Model from './Model';

export const TodoSchema = z.object({
      id: z.number(),
      name: z.string(),
  });

export type TodoSchema = z.infer<typeof TodoSchema>; 

export default class Todo extends Model{
  constructor(){
    super();
    type TodoSchema = z.infer<typeof TodoSchema>; 
    this.table = 'todo';
  }
}