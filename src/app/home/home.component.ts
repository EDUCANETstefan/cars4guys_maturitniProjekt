import { Component, OnInit } from '@angular/core';
import {IClanek} from "../clanky/IClanky";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly fireStore: AngularFirestore) { }

  clanky: IClanek[] = []

  ngOnInit(): void {
    const clanky = this.fireStore.collection<IClanek>("Clanky")
    clanky.get().subscribe(d => this.clanky = d.docs.map((c: { data: () => any; }) => c.data()))
  }

}
