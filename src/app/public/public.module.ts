import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { RegjisterComponent } from './components/regjister/regjister.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { DrejtimetComponent } from './components/drejtimet/drejtimet.component';
import { Error404Component } from './components/error404/error404.component';
import { TestemonialComponent } from './components/testemonial/testemonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { KursetComponent } from './components/kurset/kurset.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PublicComponent,
    HeroSectionComponent,
    NewsEventsComponent,
    RegjisterComponent,
    TestemonialsComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    DrejtimetComponent,
    TestemonialComponent,
    Error404Component,
    FooterComponent,
    KursetComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PublicComponent,
    DrejtimetComponent,
  ]
})
export class PublicModule { }
