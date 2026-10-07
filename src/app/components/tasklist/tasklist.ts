import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/Task';
import { tasks } from '../../models/Task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
    selector:"app-tasklist",
    templateUrl:"./tasklist.html",
    styleUrl:"./tasklist.css",
    imports:[FontAwesomeModule, FormsModule]
})

export  class TaskList{
    
    tasksList = tasks;
    constructor(private taskService:TaskService){
        this.loadTasks();
    };
    checked= false;

    faTrash = faTrash;

    loadTasks() {
        this.taskService.getTasks().subscribe({
            next: (tasks) =>{
                this.tasksList.set(tasks);
                console.log(tasks);
                
            }
        });
       
    }
    handleDelete(id:number){

        this.tasksList.update(list => list.filter(i=> i.id !== id ))

    }

    handleCheck(id:number){
        this.tasksList.update(list => list.map(t=> t.id===id? {...t, completed:true}:t));

    }
}