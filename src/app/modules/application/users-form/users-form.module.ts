import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersFormRoutingModule } from './users-form-routing.module';
import { UsersFormComponent } from './users-form.component';

@NgModule({
  declarations: [
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersFormRoutingModule
  ],
  exports: [
    UsersFormComponent
  ],
})
export class UsersFormModule { }
