import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskForm} from './components/taskForm/taskform';
import {TaskList} from './components/tasklist/tasklist';
import { LoginPage } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList, LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
