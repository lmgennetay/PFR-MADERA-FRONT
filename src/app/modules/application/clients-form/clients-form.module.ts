import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsFormRoutingModule } from './clients-form-routing.module';
import { ClientsFormComponent } from './clients-form.component';

@NgModule({
  declarations: [
    ClientsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsFormRoutingModule
  ],
  exports: [
    ClientsFormComponent
  ],
})
export class ClientsFormModule { }
