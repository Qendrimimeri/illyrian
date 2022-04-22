import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PublicModule } from '../public/public.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateKursComponent } from './modules/kurset/components/kursi/create-kurs/create-kurs.component';
import { UpdateKursComponent } from './modules/kurset/components/kursi/update-kurs/update-kurs.component';
import { ViewKursComponent } from './modules/kurset/components/kursi/view-kurs/view-kurs.component';
import { DeleteKursComponent } from './modules/kurset/components/kursi/delete-kurs/delete-kurs.component'
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    PrivateComponent,
    SidebarComponent,
    CreateKursComponent,
    UpdateKursComponent,
    ViewKursComponent,
    DeleteKursComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicModule,
    HttpClientModule,
  ],
  exports: [
    PrivateComponent,
  ]
})
export class PrivateModule { }
