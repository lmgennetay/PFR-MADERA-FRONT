import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form.component';
import { LoginFormRoutingModule } from './login-form-routing.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';


@NgModule({

  imports: [
    CommonModule,
    LoginFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginFormComponent
  ],
  declarations: [
    LoginFormComponent
  ],
  providers: [
    LoginService
  ],
})
export class LoginFormModule { }
