import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle2PageRoutingModule } from './recycle2-routing.module';

import { Recycle2Page } from './recycle2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle2PageRoutingModule
  ],
  declarations: [Recycle2Page]
})
export class Recycle2PageModule {}
