import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class TaskService{

    private apiUrl = 'http://localhost:8080/tasks';

    constructor(private http:HttpClient){}

    getTasks(){
        return this.http.get(this.apiUrl);
    }
}