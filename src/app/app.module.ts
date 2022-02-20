import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ForumComponent} from './forum/forum.component';
import {ClankyComponent} from './clanky/clanky.component';
import {ApiComponent} from './api/api.component';
import {AboutComponent} from './about/about.component';
import {environment} from "../environments/environment";
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForumComponent,
    ClankyComponent,
    ApiComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
