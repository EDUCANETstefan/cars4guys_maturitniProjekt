import {Component, EventEmitter, Output} from '@angular/core';
import {MyFirebaseService} from "./services/myFirebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AllAboutCars';

  constructor(public firebaseService : MyFirebaseService){}

  isSignedIn = false

  ngOnInit(){
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  onSingout(){
    this.isSignedIn = false;
    this.firebaseService.logout();
  }

}
