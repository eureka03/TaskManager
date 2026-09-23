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

    handleAdd(task:string){
        const newTask = {
            id:2,
            name:task,
            priority:"low",
            completed:false
        }

        tasks.push(newTask);
        this.task = "";



    }

}