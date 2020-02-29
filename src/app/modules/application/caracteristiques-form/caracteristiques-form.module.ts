import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CaracteristiquesFormRoutingModule } from './caracteristiques-form-routing.module';
import { CaracteristiquesFormComponent } from './caracteristiques-form.component';

@NgModule({
  declarations: [
    CaracteristiquesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CaracteristiquesFormRoutingModule
  ],
  exports: [
    CaracteristiquesFormComponent
  ],
})
export class CaracteristiquesFormModule { }
