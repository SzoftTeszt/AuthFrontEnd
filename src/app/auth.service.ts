import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/"
  user:any
  token:any
  constructor(private http:HttpClient) { }

  signup(user:any){
    return this.http.post(this.url+"Authentication/register", user)
  }
  signin(user:any){
     this.http.post(this.url+"Authentication/login", user).subscribe(
      (res:any)=>{
          this.url=res.user
          this.token=res.token
          console.log("User:",this.user)
          console.log("Token:",this.token)
      }
     )
  }
}
