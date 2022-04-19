import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { RegjisterComponent } from './components/regjister/regjister.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';

@NgModule({
  declarations: [
    PublicComponent,
    HeroSectionComponent,
    NewsEventsComponent,
    RegjisterComponent,
    TestemonialsComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
