import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle7PageRoutingModule } from './recycle7-routing.module';

import { Recycle7Page } from './recycle7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle7PageRoutingModule
  ],
  declarations: [Recycle7Page]
})
export class Recycle7PageModule {}
