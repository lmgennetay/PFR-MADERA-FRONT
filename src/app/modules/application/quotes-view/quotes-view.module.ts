import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotesViewRoutingModule } from './quotes-view-routing.module';
import { QuotesViewComponent } from './quotes-view.component';

@NgModule({
  declarations: [
    QuotesViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuotesViewRoutingModule
  ],
  exports: [
    QuotesViewComponent
  ],
})
export class QuotesViewModule { }
