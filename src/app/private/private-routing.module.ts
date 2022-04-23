import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path : '', component : PrivateComponent, 
  children : [
    { path: '', redirectTo : 'kurset', pathMatch: 'full'},
    { path: 'kurset', loadChildren: () => import('./modules/kurset/kurset.module').then(m => m.KursetModule) },
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
