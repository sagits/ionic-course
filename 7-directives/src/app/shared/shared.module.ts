import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
  ],
  imports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class SharedModule {
}
