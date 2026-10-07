import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../models/Task";


@Injectable ({
    providedIn:'root'

})
export class TaskService{
     private baseUrl = "http://localhost:8080";
    constructor(private http:HttpClient){}
    

    getTasks():Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseUrl}/api/tasks`);
    }

    getTaskById(id:number){
        return this.http.get(`${this.baseUrl}/api/${id}`);
    }

}