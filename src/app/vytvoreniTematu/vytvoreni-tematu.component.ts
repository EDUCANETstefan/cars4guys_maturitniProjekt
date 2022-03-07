import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";

@Component({
  selector: 'app-vytvoreni-tematu',
  templateUrl: './vytvoreni-tematu.component.html',
  styleUrls: ['./vytvoreni-tematu.component.scss']
})
export class VytvoreniTematuComponent implements OnInit {

  constructor(public firebaseService : MyFirebaseService) { }

  isSignedIn = false

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
    console.log(localStorage, this.isSignedIn)
  }

  vytvoritTema(nadpis: string, obsah: string) {
    if (this.isSignedIn) {
      console.log(nadpis, obsah)
    } else alert("Musíte být přihlášen!")

  }

}
