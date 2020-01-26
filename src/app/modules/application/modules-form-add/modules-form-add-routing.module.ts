import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesFormAddComponent } from './modules-form-add.component';

const routes: Routes = [
  { path: '', component: ModulesFormAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesFormAddRoutingModule { }
