import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle3PageRoutingModule } from './recycle3-routing.module';

import { Recycle3Page } from './recycle3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle3PageRoutingModule
  ],
  declarations: [Recycle3Page]
})
export class Recycle3PageModule {}
