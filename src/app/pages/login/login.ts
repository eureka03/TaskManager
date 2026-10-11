import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl:'./login.html',
    styleUrl:'./login.css',
    imports:[FormsModule]

})
export class LoginPage{

    username = "";
    password = "";


}