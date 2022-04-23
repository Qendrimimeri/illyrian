import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKursComponent } from './components/create-kurs/create-kurs.component';
import { DeleteKursComponent } from './components/delete-kurs/delete-kurs.component';
import { UpdateKursComponent } from './components/update-kurs/update-kurs.component';
import { ViewKursComponent } from './components/view-kurs/view-kurs.component';
import { KursetComponent } from './kurset.component';

const routes: Routes = [
  { path: '', component: KursetComponent, 
  children : [

    // Kurset Crud
    { path : 'create-kursi', component : CreateKursComponent},
    { path : 'delete-kursi', component : DeleteKursComponent},
    { path : 'view-kursi/:id', component : ViewKursComponent},
    { path : 'update-kursi/:id', component : UpdateKursComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KursetRoutingModule { }
