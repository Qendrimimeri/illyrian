import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DrejtimetComponent } from './components/drejtimet/drejtimet.component';
import { KursetComponent } from './components/kurset/kurset.component';
import { TestemonialComponent } from './components/testemonial/testemonial.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    DrejtimetComponent,
    KursetComponent,
    TestemonialComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    DrejtimetComponent,
    KursetComponent,
    TestemonialComponent,
    FooterComponent,
    
  ]
})
export class SharedModule { }
