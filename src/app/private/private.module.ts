import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PublicModule } from '../public/public.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicModule
  ],
  exports: [
    PrivateComponent,
  ]
})
export class PrivateModule { }
