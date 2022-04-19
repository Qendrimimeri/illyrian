import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  { path: 'admin', loadChildren: () => import('./private/modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'profesor', loadChildren: () => import('./private/modules/profesor/profesor.module').then(m => m.ProfesorModule) },
  { path: 'student', loadChildren: () => import('./private/modules/student/student.module').then(m => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
