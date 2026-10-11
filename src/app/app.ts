import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { TaskManager } from './pages/taskmanager/taskmanager';

@Component({
  selector: 'app-root',
  imports: [ LoginPage,Registration,TaskManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isMember = true;
  isLoggedIn = false;

  
}
