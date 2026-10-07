import { Component, signal } from '@angular/core';
import {tasks} from "../../models/Task"
import { FormsModule } from '@angular/forms';

@Component({
    selector:'app-form',
    templateUrl:'./taskform.html',
    styleUrl:'./taskform.css',
    imports:[FormsModule]

})

export class TaskForm{

    task = "";
    count = 1;

    handleAdd(task:string){
        const newTask = {
            id:this.count,
            name:task,
            priority:"low",
            completed:false
        }

        tasks.update(tasks=> [...tasks , newTask]);
        this.task = "";
        this.count++;



    }

}