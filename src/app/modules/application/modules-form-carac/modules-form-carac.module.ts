import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesFormCaracAddRoutingModule } from './modules-form-carac-add-routing.module';
import { ModulesFormCaracAddComponent } from './modules-form-carac-add.component';

@NgModule({
  declarations: [
    ModulesFormCaracAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModulesFormCaracAddRoutingModule
  ],
  exports: [
    ModulesFormCaracAddComponent
  ],
})
export class ModulesFormCaracAddModule { }
