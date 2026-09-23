import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {tasks} from "../../models/Task"
import { FormsModule } from '@angular/forms';

@Component({
    selector:"app-tasklist",
    templateUrl:"./tasklist.html",
    styleUrl:"./tasklist.css",
    imports:[FontAwesomeModule, FormsModule]
})

export  class TaskList{
    checked= false;

    faTrash = faTrash;

    tasks = tasks;

    handleDelete(id:number){

        this.tasks = this.tasks.filter((i)=> i.id !== id )

    }

    handleCheck(id:number){
        this.checked = true;
        console.log(this.checked);

    }
    
}