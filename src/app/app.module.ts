import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ClankyComponent } from './clanky/clanky.component';
import { ApiComponent } from './api/api.component';
import { AboutComponent } from './about/about.component';
import {environment} from "../environments/environment";
import { AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import * as firebase from "firebase";
import {MyFirebaseService} from "./services/myFirebase.service";

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [MyFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
