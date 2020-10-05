import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recycle5Page } from './recycle5.page';

const routes: Routes = [
  {
    path: '',
    component: Recycle5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recycle5PageRoutingModule {}
