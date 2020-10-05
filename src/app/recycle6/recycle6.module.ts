import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle6PageRoutingModule } from './recycle6-routing.module';

import { Recycle6Page } from './recycle6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle6PageRoutingModule
  ],
  declarations: [Recycle6Page]
})
export class Recycle6PageModule {}
