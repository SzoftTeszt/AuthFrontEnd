import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private auth:AuthService, private router:Router){}
  
  signinAdmin(user?:any){
    user={
      "username": "Admin",
      "password": "Almafa12;",   
    }
    this.auth.signin(user)

  }

}
