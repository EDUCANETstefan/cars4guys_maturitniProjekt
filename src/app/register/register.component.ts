import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'firebase-angular-auth'
  isSignedIn = false

  constructor(public firebaseService : MyFirebaseService){}

  ngOnInit(){
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.singUp(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }


  handleLogout(){
    this.isSignedIn = false

  }

}
