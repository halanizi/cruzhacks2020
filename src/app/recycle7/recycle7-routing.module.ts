import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle7Page } from './recycle7.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle7PageRoutingModule {}
