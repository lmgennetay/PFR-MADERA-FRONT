import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaracteristiquesFormComponent } from './caracteristiques-form.component';

const routes: Routes = [
  { path: '', component: CaracteristiquesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracteristiquesFormRoutingModule { }
