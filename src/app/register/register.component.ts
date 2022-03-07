import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'firebase-angular-auth'
  isSignedIn = false

  constructor(public firebaseService : MyFirebaseService, public router : Router){}

  ngOnInit(){
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async onSignup(email:string, username: string, password:string, password2:string){
    if (password == password2) {
      try{
        await this.firebaseService.singUp(email,password)
        if(this.firebaseService.isLoggedIn) { this.isSignedIn = true}
        await this.router.navigateByUrl("home");
      } catch (e) {
        alert(e);
      }

    } alert("Passwords are not same!")



  }


}
