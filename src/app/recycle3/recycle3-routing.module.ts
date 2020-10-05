import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle3Page } from './recycle3.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle3PageRoutingModule {}
