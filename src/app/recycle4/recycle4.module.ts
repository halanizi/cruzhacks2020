import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle4PageRoutingModule } from './recycle4-routing.module';

import { Recycle4Page } from './recycle4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle4PageRoutingModule
  ],
  declarations: [Recycle4Page]
})
export class Recycle4PageModule {}
