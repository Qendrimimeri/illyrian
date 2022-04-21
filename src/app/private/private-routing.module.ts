import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path : '', component : PrivateComponent, 
  children : [
    {path : 'sidebar', component : SidebarComponent},
    {path : 'dashboard', component : DashboardComponent},
    { path: '', redirectTo : '/admin/sidebar', pathMatch: 'full'},
  ],  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
