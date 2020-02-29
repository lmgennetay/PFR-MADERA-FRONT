import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracteristiquesListComponent } from './caracteristiques-list.component';

const routes: Routes = [
  { path: '', component: CaracteristiquesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracteristiquesListRoutingModule { }
