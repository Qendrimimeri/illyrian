import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KursetService } from './private/modules/kurset/services/kurset.service'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [KursetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
