import { Component, signal } from '@angular/core';
import {tasks} from "../../models/Task"
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector:'app-form',
    templateUrl:'./taskform.html',
    styleUrl:'./taskform.css',
    imports:[FormsModule]

})

export class TaskForm{

    constructor(private taskService:TaskService){};

    tasks = tasks;
    task = "";
    count = 1;

    handleAdd(task:string){
        const newTask : Task = {
            id:0,
            name:task,
            priority:"low",
            completed:false
        }

        this.taskService.postTask(newTask).subscribe({
            next: (tasks)=>{
                this.tasks.update(list=> [...list,tasks]);      

            },
            error: (err) => console.error('Failed to save task',err)
        })

        this.task = "";
        this.count++;
    }

}