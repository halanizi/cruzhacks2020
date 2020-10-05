import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle4Page } from './recycle4.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle4PageRoutingModule {}
