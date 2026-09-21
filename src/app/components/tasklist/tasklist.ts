import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {tasks} from "../../models/Task"

@Component({
    selector:"app-tasklist",
    templateUrl:"./tasklist.html",
    styleUrl:"./tasklist.css",
    imports:[FontAwesomeModule]
})

export  class TaskList{

    faTrash = faTrash;

    tasks = tasks;

    handleDelete(id:number){

        this.tasks = this.tasks.filter((i)=> i.id !== id )

    }
    
}