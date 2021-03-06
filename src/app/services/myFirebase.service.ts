import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class MyFirebaseService {

  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth) { }

  async singIn(email: string, password : string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async singUp(email: string, password : string, username: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.user))
        res.user?.updateProfile({displayName : username})
      })
  }

  async logout(){
    await this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
