import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chart',
        loadChildren: () => import('../chart/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'buy',
        loadChildren: () => import('../buy/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: '',
        redirectTo: 'chart',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
