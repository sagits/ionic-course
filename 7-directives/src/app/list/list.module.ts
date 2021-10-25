import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { NgPipesModule } from 'ngx-pipes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ListPageRoutingModule,
    NgPipesModule //ADD
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
