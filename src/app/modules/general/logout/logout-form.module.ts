import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutFormComponent } from './logout-form.component';
import { LogoutFormRoutingModule } from './logout-form-routing.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutService } from './logout.service';


@NgModule({

  imports: [
    CommonModule,
    LogoutFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LogoutFormComponent
  ],
  declarations: [
    LogoutFormComponent
  ],
  providers: [
    LogoutService
  ],
})
export class LogoutFormModule { }
