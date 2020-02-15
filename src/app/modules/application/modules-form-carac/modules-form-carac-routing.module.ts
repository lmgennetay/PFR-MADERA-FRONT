import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesFormCaracAddComponent } from './modules-form-carac-add.component';

const routes: Routes = [
  { path: '', component: ModulesFormCaracAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesFormCaracAddRoutingModule { }
