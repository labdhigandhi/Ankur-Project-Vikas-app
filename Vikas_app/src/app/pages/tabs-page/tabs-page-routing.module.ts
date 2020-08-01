import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { MainPage } from '../main/main.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            component: MainPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../main/main.module').then(m => m.MainPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
          }
        ]
      },
      {
        path: 'subscriptions',
        children: [
          {
            path: '',
            loadChildren: () => import('../subscriptions/subscriptions.module').then(m => m.SubscriptionsPageModule)
          }
        ]
      },
      {
        path: 'homework',
        children: [
          {
            path: '',
            loadChildren: () => import('../homework/homework.module').then(m => m.HomeworkPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/main',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

