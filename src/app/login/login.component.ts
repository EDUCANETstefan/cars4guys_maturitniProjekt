import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'firebase-angular-auth';
  isSignedIn = false

  constructor(public firebaseService : MyFirebaseService, public router : Router){}

  ngOnInit(){
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.singIn(email,password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
    }
    if (!this.isSignedIn) {
      alert("Špatně jste zadali email nebo heslo!")
    }

    await this.router.navigateByUrl("home");
  }

}
