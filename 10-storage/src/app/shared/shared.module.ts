import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
  ],
  imports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DirectivesModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports: [
    DirectivesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DirectivesModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class SharedModule {
}
