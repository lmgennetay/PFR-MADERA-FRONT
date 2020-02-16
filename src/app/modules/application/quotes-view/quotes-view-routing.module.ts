import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesViewComponent } from './quotes-view.component';

const routes: Routes = [
  { path: '', component: QuotesViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesViewRoutingModule { }
