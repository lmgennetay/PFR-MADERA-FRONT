import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesFormComponent } from './modules-form.component';

const routes: Routes = [
  { path: '', component: ModulesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesFormRoutingModule { }
