import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KursetRoutingModule } from './kurset-routing.module';
import { KursetComponent } from './kurset.component';


@NgModule({
  declarations: [
    KursetComponent
  ],
  imports: [
    CommonModule,
    KursetRoutingModule
  ]
})
export class KursetModule { }
