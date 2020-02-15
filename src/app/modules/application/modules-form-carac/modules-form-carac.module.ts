import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesFormCaracRoutingModule } from './modules-form-carac-routing.module';
import { ModulesFormCaracComponent } from './modules-form-carac.component';

@NgModule({
  declarations: [
    ModulesFormCaracComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModulesFormCaracRoutingModule
  ],
  exports: [
    ModulesFormCaracComponent
  ],
})
export class ModulesFormCaracModule { }
