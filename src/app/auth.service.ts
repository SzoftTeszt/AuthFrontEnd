import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/"
  constructor(private http:HttpClient) { }

  signup(user:any){
    return this.http.post(this.url+"Authentication/register", user)
  }
}
