import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { IonicModule } from '@ionic/angular';
import { NgPipesModule } from 'ngx-pipes';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgPipesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProductCardComponent
  ]
})
export class ComponentsModule { }
