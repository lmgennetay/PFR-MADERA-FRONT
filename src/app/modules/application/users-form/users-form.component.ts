import { Component, Injector } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Location } from '@angular/common';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})

export class UsersFormComponent extends PageFormComponent {
  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.comm_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    }
    this.endpoint = 'commercial';
    this.titleForm = 'Formulaire commercial';
    this.icon = 'fas fa-file-medical';
    super.initialize();
  }

  createForm() {
    this.form = this.fb.group({
      id: new FormControl({value: null, disabled: true}),
      pers_nom: [null,
        [Validators.required]
      ],
      pers_prenom: [null,
        [Validators.required]
      ],
      pers_mail: [null,
        [Validators.required, Validators.pattern]
        ],
      pers_tel: [null,
        [Validators.required]
      ],
      comm_mdp: [null,
        [Validators.required, Validators.minLength]
      ],
      pers_sexe: [null,
        [Validators.required]
      ],
      comm_confirm_mdp: [null,
        [Validators.required, Validators.minLength]
      ]
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.pers_nom = null;
    this.item.pers_prenom = null;
    this.item.pers_mail = null;
    this.item.pers_tel = null;
    this.item.comm_mdp = null;
    this.item.comm_confirm_mdp = null;
    this.item.pers_sexe = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.pers_nom.setValue(item.pers_nom);
    this.form.controls.pers_prenom.setValue(item.pers_prenom);
    this.form.controls.pers_mail.setValue(item.pers_mail);
    this.form.controls.pers_tel.setValue(item.pers_tel);
    this.form.controls.comm_mdp.setValue(item.comm_mdp);
    this.form.controls.pers_sexe.setValue(item.pers_sexe);
    super.setFormValue(item);
  }

  onDelete() {
    // alert('user');
    let res: any;
    res = super.onDelete();
    this.router.navigate(['commercials']);
  }

  onUpdate() {
    let res: any;
    delete this.item.comm_confirm_mdp;
    res = super.onUpdate();
    this.router.navigate(['commercials']);
  }

  get id() {
    return this.form.get('id');
  }
  get pers_nom() {
    return this.form.get('pers_nom');
  }
  get pers_prenom() {
    return this.form.get('pers_prenom');
  }
  get pers_mail() {
    return this.form.get('pers_mail');
  }
  get pers_tel() {
    return this.form.get('pers_tel');
  }
  get comm_mdp() {
    return this.form.get('comm_mdp');
  }
  get comm_confirm_mdp() {
    return this.form.get('comm_confirm_mdp');
  }
  get pers_sexe() {
    return this.form.get('pers_sexe');
  }
  backClicked() {
    this.location.back();
  }
}
