import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskForm} from './components/taskForm/taskform'

@Component({
  selector: 'app-root',
  imports: [TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
