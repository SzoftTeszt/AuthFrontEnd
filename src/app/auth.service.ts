import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/"
  user:any
  private token:any

  private userSub = new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) { }

  getUser(){
    return this.userSub
  }

  signup(user:any){
    return this.http.post(this.url+"Authentication/register", user)
  }
  signin(user:any){
     this.http.post(this.url+"Authentication/login", user).subscribe(
      {
        next:(res:any)=>{
          this.user=res.user
          this.token=res.token
          //this.user.token=res.token
          this.getClaims(this.user.id).subscribe(
            (claims)=>{ 
              this.user.claims=claims
              console.log(this.user)
              this.userSub.next(this.user)
            }
          )
          console.log("User:",this.user)
          console.log("Token:",this.token)
      },
      error:()=>{console.log("Sikertelen belépés!")}
    }
     )
  }

  getClaims(id:any){
    let headers= 
    new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.get(this.url+"userClaims/"+id, {headers:headers})
  }
  updateUser(user:any){
    const fejlec:any={
      'headers': new HttpHeaders({
        'Authorization':('Bearer '+this.token)
    }),
      'responseType':'text'
    };

    // let headers= 
    // new HttpHeaders().set('Authorization','Bearer '+this.token)
    this.http.post(this.url+"Authentication/update", user, fejlec)
      .subscribe(
        {
          next:(res)=>console.log("siker", res),
          error:(res)=>console.log("hiba", res),
        }
      )
  }

  logout(){
    this.user=null
    this.token=null
    this.userSub.next(null)
  }
}
