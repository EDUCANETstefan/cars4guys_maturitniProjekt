import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {IOtazka} from "./IOtazka";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private readonly fireStore: AngularFirestore) { }


  otazky: IOtazka[] = []

  ngOnInit(): void {
    const otazky = this.fireStore.collection<IOtazka>("Forum")
    otazky.get().subscribe(d => this.otazky = d.docs.map((c: { data: () => any; }) => c.data()))
  }



}
