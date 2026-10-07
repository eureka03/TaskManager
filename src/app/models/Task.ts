import { signal } from '@angular/core';

 export interface Task {
   id:number,
   name:string,
   priority:string,
   completed:boolean
 }

export const tasks =  signal<Task[]>([]);