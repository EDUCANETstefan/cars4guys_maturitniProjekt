import { Component, OnInit } from '@angular/core';
import {MyFirebaseService} from "../services/myFirebase.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {get} from "@angular/fire/database";

@Component({
  selector: 'app-vytvoreni-tematu',
  templateUrl: './vytvoreni-tematu.component.html',
  styleUrls: ['./vytvoreni-tematu.component.scss']
})
export class VytvoreniTematuComponent implements OnInit {

  constructor(public firebaseService : MyFirebaseService, private readonly fireStore: AngularFirestore) {

  }

  isSignedIn = false

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async vytvoritTema(nadpis: string, obsah: string) {
    if (this.isSignedIn) {
      const clanky = this.fireStore.collection("Forum")
      await clanky.add({nadpis, obsah})

    } else alert("Musíš být přihlášen!")

  }

}
