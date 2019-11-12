import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesFormComponent } from './quotes-form.component';

const routes: Routes = [
  { path: '', component: QuotesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesFormRoutingModule { }
