import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle2Page } from './recycle2.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle2PageRoutingModule {}
