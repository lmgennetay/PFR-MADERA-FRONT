import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesFormAddRoutingModule } from './modules-form-add-routing.module';
import { ModulesFormAddComponent } from './modules-form-add.component';

@NgModule({
  declarations: [
    ModulesFormAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModulesFormAddRoutingModule
  ],
  exports: [
    ModulesFormAddComponent
  ],
})
export class ModulesFormAddModule { }
