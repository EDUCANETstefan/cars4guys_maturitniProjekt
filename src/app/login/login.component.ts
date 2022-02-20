import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'firebase-angular-auth';
  isSignedIn = false

  constructor(public firebaseService : MyFirebaseService){}

  ngOnInit(){
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async onSignin(email:string,password:string){
    console.log("this.firebaseService " + this.firebaseService)
    await this.firebaseService.singIn(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }

}
