import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {IOtazka} from "../forum/IOtazka";
import {IClanek} from "./IClanky";

@Component({
  selector: 'app-clanky',
  templateUrl: './clanky.component.html',
  styleUrls: ['./clanky.component.scss']
})
export class ClankyComponent implements OnInit {

  constructor(private readonly fireStore: AngularFirestore) { }

  clanky: IClanek[] = []

  ngOnInit(): void {
    const clanky = this.fireStore.collection<IClanek>("Clanky")
    clanky.get().subscribe(d => this.clanky = d.docs.map(c => c.data()))
  }

}
