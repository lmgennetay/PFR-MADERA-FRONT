import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogoutFormComponent} from './logout-form.component';


const routes: Routes = [
  { path: '', component: LogoutFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class LogoutFormRoutingModule { }
