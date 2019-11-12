import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotesFormRoutingModule } from './quotes-form-routing.module';
import { QuotesFormComponent } from './quotes-form.component';

@NgModule({
  declarations: [
    QuotesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuotesFormRoutingModule
  ],
  exports: [
    QuotesFormComponent
  ],
})
export class QuotesFormModule { }
