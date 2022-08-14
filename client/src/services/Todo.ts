import z from 'zod'
import axios from 'axios'


export const TodoSchema = z.object({
      id: z.number(),
      name: z.string(),
});

export type TodoType = z.infer<typeof TodoSchema>; 

export async function getAll():Promise<TodoType[]>{
      const req = await axios.get('/api/todo');
      return req.data;
}
export async function remove(id:number):Promise<void>{
      await axios.delete(`/api/todo/${id}`);
}
export async function create(data:TodoType):Promise<void>{
      await axios.post(`/api/todo/`,data);
}