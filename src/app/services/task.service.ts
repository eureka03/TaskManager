import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable ({
    providedIn:'root'

})
export class TaskService{
     private baseUrl = "http://localhost:8080";
    constructor(private http:HttpClient){}
    

    getTaks() {
        return this.http.get(`${this.baseUrl}/api/v1/tasks`);
    }

    getTaskById(id:number){
        return this.http.get(`${this.baseUrl}/api/v1/${id}`);
    }

}