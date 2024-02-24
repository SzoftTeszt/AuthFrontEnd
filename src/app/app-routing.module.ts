import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"profile",component:ProfileComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"",component:SigninComponent},
  {path:"**",component:SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
