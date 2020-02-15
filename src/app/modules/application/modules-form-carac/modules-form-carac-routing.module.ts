import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesFormCaracComponent } from './modules-form-carac.component';

const routes: Routes = [
  { path: '', component: ModulesFormCaracComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesFormCaracRoutingModule { }
