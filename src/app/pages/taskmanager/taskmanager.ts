import { Component } from "@angular/core";
import { TaskForm } from "../../components/taskForm/taskform";
import { TaskList } from "../../components/tasklist/tasklist";


@Component({
    selector:"app-taskmanager",
    templateUrl:"./taskmanager.html",
    styleUrl:"./taskmanager.css",
    imports:[TaskForm, TaskList,]
})

export class TaskManager{

}