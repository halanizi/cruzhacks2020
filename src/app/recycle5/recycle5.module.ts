import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recycle5PageRoutingModule } from './recycle5-routing.module';

import { Recycle5Page } from './recycle5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recycle5PageRoutingModule
  ],
  declarations: [Recycle5Page]
})
export class Recycle5PageModule {}
