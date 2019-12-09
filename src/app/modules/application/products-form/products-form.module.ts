import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsFormRoutingModule } from './products-form-routing.module';
import { ProductsFormComponent } from './products-form.component';

@NgModule({
  declarations: [
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsFormRoutingModule
  ],
  exports: [
    ProductsFormComponent
  ],
})
export class ProductsFormModule { }
