import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
      path: 'plastic',
      loadChildren: () => import('./plastic/plastic.module').then(m => m.plasticPageModule)
  },
  {
      path: 'cardboard',
      loadChildren: () => import('./cardboard/cardboard.module').then(m=> m.cardboardPageModule)
    },
    {
        path: 'glass',
        loadChildren: () => import('./glass/glass.module').then(m=> m.glassPageModule)
    },
    {
        path: 'metal',
        loadChildren: () => import('./metal/metal.module').then(m=> m.metalPageModule)
    },
    {
        path: 'nearestlocations',
        loadChildren: () => import('./Nearest Locations/nearestlocations.module').then(m => m.nearestlocationsPageModule)
    },
  {
    path: 'recycle1',
    loadChildren: () => import('./recycle1/recycle1.module').then( m => m.Recycle1PageModule)
  },
  {
    path: 'recycle2',
    loadChildren: () => import('./recycle2/recycle2.module').then( m => m.Recycle2PageModule)
  },
  {
    path: 'recycle3',
    loadChildren: () => import('./recycle3/recycle3.module').then( m => m.Recycle3PageModule)
  },
  {
    path: 'recycle4',
    loadChildren: () => import('./recycle4/recycle4.module').then( m => m.Recycle4PageModule)
  },
  {
    path: 'recycle5',
    loadChildren: () => import('./recycle5/recycle5.module').then( m => m.Recycle5PageModule)
  },
  {
    path: 'recycle6',
    loadChildren: () => import('./recycle6/recycle6.module').then( m => m.Recycle6PageModule)
  },
  {
    path: 'recycle7',
    loadChildren: () => import('./recycle7/recycle7.module').then( m => m.Recycle7PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
