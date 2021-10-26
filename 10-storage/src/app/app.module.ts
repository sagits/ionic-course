import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common'; //ADICIONE ESTA LINHA
import localePt from '@angular/common/locales/pt'; //ADICIONE ESTA LINHA
import { NgPipesModule } from 'ngx-pipes';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AngularFireModule } from '@angular/fire';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

registerLocaleData(localePt);

const firebaseConfig = {
  apiKey: "AIzaSyDWojGFHGU02z-18oUxTSaEqi50XwuH0WI",
  authDomain: "empirical-mote-127214.firebaseapp.com",
  projectId: "empirical-mote-127214",
  storageBucket: "empirical-mote-127214.appspot.com",
  messagingSenderId: "235764707700",
  appId: "1:235764707700:web:13f1e157a45348e9787c21"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // Importe aqui
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NavParams,
  { provide: LOCALE_ID, useValue: 'pt-BR' } //ADICIONE ESTA LINHA
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
