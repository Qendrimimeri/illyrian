import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PublicModule } from '../public/public.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateKursComponent } from './modules/kurset/components/update-kurs/update-kurs.component';
import { ViewKursComponent } from './modules/kurset/components/view-kurs/view-kurs.component';
import { DeleteKursComponent } from './modules/kurset/components/delete-kurs/delete-kurs.component'
import { NavComponent } from './components/nav/nav.component';
import { KursetService } from './modules/kurset/services/kurset.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateKursComponent } from './modules/kurset/components/create-kurs/create-kurs.component';

@NgModule({
  declarations: [
    PrivateComponent,
    SidebarComponent,
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
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrivateComponent,
  ],
  providers: [KursetService],

})
export class PrivateModule { }
