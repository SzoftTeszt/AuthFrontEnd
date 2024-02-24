import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth:AuthService, private router:Router){}

  signup(user?:any){
    user={
      "username": "Admin11",
      "firstName": "string",
      "lastName": "string",
      "email": "user@example.com",
      "password": "Almafa12;",
      "address": "string"
    }
    this.auth.signup(user).subscribe(
      {
        next:(res:any)=>{
          console.log("Sikeres reg")
          this.router.navigate(['/signin'])
        },
        error:()=>console.log("Hibás regisztráció")
      }
    )

  }
}
