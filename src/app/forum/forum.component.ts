import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {IOtazka, IOtazkaData} from "./IOtazka";
import firebase from "firebase/compat";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import {get} from "@angular/fire/database";
import {documentId} from "@angular/fire/firestore";
import {IKomentar} from "./IKomentar";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private readonly fireStore: AngularFirestore) { }


  otazky: Promise<IOtazka>[] = []
  isSignedIn = false

  async getOtazka(document: QueryDocumentSnapshot<IOtazkaData>): Promise<IOtazka>{
    const komentare = (await document.ref.collection("komentare").get()).docs.map(k => k.data()) as Array<IKomentar>
    return {
      id: document.id, komentare: komentare, nadpis: document.data().nadpis, obsah: document.data().obsah

    }
  }

  ngOnInit(): void {
    const otazky = this.fireStore.collection<IOtazkaData>("Forum")
    otazky.get().subscribe(d => this.otazky = d.docs.map(async (c )=> this.getOtazka(c)))
    this.isSignedIn = localStorage.getItem('user') !== null;
  }


  pridatKomentar(komentar: string, id: string) {
    if (this.isSignedIn) {
      const clanky = this.fireStore.collection("Forum").doc(id).collection("komentare").add({obsah: komentar})

    } else alert("Musíš být přihlášen!")
  }


}
