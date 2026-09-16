import { Component, signal } from '@angular/core';
import {Task} from "../../models/Task"

@Component({
    selector:"app-tasklist",
    templateUrl:"./tasklist.html",
    styleUrl:"./tasklist.css",
    imports:[]
})

export  class TaskList{

    tasks: Task[] = [
        {
            id:1,
            name:"Testing task",
            priority:"high",
            completed:false
        },
        {
            id:1,
            name:"Testing task",
            priority:"high",
            completed:false
        }

    ];
    
    
    
}