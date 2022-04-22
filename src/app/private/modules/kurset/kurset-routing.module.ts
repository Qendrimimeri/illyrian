import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKursComponent } from './components/kursi/create-kurs/create-kurs.component';
import { DeleteKursComponent } from './components/kursi/delete-kurs/delete-kurs.component';
import { UpdateKursComponent } from './components/kursi/update-kurs/update-kurs.component';
import { ViewKursComponent } from './components/kursi/view-kurs/view-kurs.component';
import { KursetComponent } from './kurset.component';

const routes: Routes = [
  { path: '', component: KursetComponent, 
  children : [

    // Kurset Crud
    { path : 'admin/kurset/create-kursi/', component : CreateKursComponent},
    { path : 'admin/kurset/delete-kursi/', component : DeleteKursComponent},
    { path : 'admin/kurset/view-kursi/:id', component : ViewKursComponent},
    { path : 'admin/kurset/update-kursi/:id', component : UpdateKursComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KursetRoutingModule { }
