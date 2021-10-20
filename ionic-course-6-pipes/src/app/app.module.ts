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

registerLocaleData(localePt); //ADICIONE ESTA LINHA

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // Importe aqui
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NavParams,
    {provide: LOCALE_ID, useValue: 'pt-BR'} //ADICIONE ESTA LINHA
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
