import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./table-module/table-module.module').then(m => m.TableModuleModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: CustomPreloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }