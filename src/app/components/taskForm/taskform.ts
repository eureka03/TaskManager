import { Component, signal } from '@angular/core';
import {tasks} from "../../models/Task"

@Component({
    selector:'app-form',
    templateUrl:'./taskform.html',
    styleUrl:'./taskform.css',
    imports:[]

})

export class TaskForm{

    handleAdd(task:string){
        const newTask = {
            id:2,
            name:task,
            priority:"low",
            completed:false
        }

        tasks.push(newTask);



    }

}