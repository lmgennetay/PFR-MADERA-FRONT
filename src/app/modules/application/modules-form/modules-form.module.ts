import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesFormRoutingModule } from './modules-form-routing.module';
import { ModulesFormComponent } from './modules-form.component';

@NgModule({
  declarations: [
    ModulesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModulesFormRoutingModule
  ],
  exports: [
    ModulesFormComponent
  ],
})
export class ModulesFormModule { }
