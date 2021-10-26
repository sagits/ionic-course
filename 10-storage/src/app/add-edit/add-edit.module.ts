import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditPageRoutingModule } from './add-edit-routing.module';

import { AddEditPage } from './add-edit.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddEditPageRoutingModule
  ],
  declarations: [AddEditPage]
})
export class AddEditPageModule {}
