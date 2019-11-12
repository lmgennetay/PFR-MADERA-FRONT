import {Component, Injector} from '@angular/core';
import { Validators } from '@angular/forms';

import {PageFormComponent} from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'login';
    this.titleForm = 'Formulaire login';
    this.icon = 'fas fas fa-sign-in-alt';
    super.initialize();
  }
  createForm() {
    this.form = this.fb.group({
      username:  [null,
        [Validators.required]
      ],
      password: [null,
        [Validators.required]
      ]
    });
    super.createForm();
  }

  resetForm() {
    this.item.username = null;
    this.item.password = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.username.setValue(item.username);
    this.form.controls.password.setValue(item.password);
    super.setFormValue(item);
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
