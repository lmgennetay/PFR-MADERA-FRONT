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

  onLogin() {
    localStorage.clear();
    super.login();
    // this.resetForm();
  }
  createForm() {
    this.form = this.fb.group({
      mail_utilisateur:  [null,
        [Validators.required]
      ],
      mdp_utilisateur: [null,
        [Validators.required, Validators.minLength]
      ],
    });
    super.createForm();
  }

  resetForm() {
    this.item.mail_utilisateur = null;
    this.item.mdp_utilisateur = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.mail_utilisateur.setValue(item.mail_utilisateur);
    this.form.controls.mdp_utilisateur.setValue(item.mdp_utilisateur);
    super.setFormValue(item);
  }

  get mail_utilisateur() {
    return this.form.get('mail_utilisateur');
  }
  get mdp_utilisateur() {
    return this.form.get('mdp_utilisateur');
  }
}
