import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersFormRoutingModule } from './customers-form-routing.module';
import { CustomersFormComponent } from './customers-form.component';

@NgModule({
  declarations: [
    CustomersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersFormRoutingModule
  ],
  exports: [
    CustomersFormComponent
  ],
})
export class CustomersFormModule { }
