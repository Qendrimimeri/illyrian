import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegjisterComponent } from './components/shared/regjister/regjister.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'regjister', component: RegjisterComponent },
      { path: '', redirectTo : '/login', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
