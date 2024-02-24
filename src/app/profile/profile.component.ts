import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  updateUser:any={}
  user:any

  constructor(private auth:AuthService, private router:Router){
    this.auth.getUser().subscribe(
      (res)=>{
        this.user=res
        this.updateUser.username= this.user.userName
        this.updateUser.firstName= this.user.firstName
        this.updateUser.lastName= this.user.lastName
        this.updateUser.email= this.user.email
        this.updateUser.address= this.user.address
      }
    )
  }
  
  update(){
    this.updateUser.id=this.user.id
    this.auth.updateUser(this.updateUser)
  }
  
 
}
