import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle1PageRoutingModule } from './recycle1-routing.module';

import { Recycle1Page } from './recycle1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle1PageRoutingModule
  ],
  declarations: [Recycle1Page]
})
export class Recycle1PageModule {}
