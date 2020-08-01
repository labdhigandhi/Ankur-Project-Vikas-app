import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';

import { MainPageModule } from '../main/main.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { ProductsPageModule } from '../products/products.module';
import { SubscriptionsPageModule } from '../subscriptions/subscriptions.module';
import { HomeworkPageModule } from '../homework/homework.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MainPageModule,
    DashboardPageModule,
    ProductsPageModule,
    SubscriptionsPageModule,
    HomeworkPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
