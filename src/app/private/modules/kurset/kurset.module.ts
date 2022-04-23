import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KursetRoutingModule } from './kurset-routing.module';
import { KursetComponent } from './kurset.component';
import { KursetService } from './services/kurset.service';
import { CreateKursComponent } from './components/create-kurs/create-kurs.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KursetComponent,
    CreateKursComponent
  ],
  imports: [
    CommonModule,
    KursetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [KursetService],
})
export class KursetModule { }
