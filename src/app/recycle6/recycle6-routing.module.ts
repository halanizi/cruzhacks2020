import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle6Page } from './recycle6.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle6PageRoutingModule {}
