import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent extends PageFormComponent {
  today: Date;
  today = new Date();
  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'utilisateur/';
    this.titleForm = 'Formulaire utilisateur';
    this.icon = 'fas fa-file-medical';
    super.initialize();
  }

  createForm(today) {
  this.form = this.fb.group({
      id: null,
      releaseDate: [today,
        [Validators.required]
      ],
      nom_utilisateur: [null,
        [Validators.required]
      ],
      prenom_utilisateur: [null,
        [Validators.required]
      ],
      mail_utilisateur: [null,
        [Validators.required]
        ],
      tel_utilisateur: [null,
        [Validators.required]
      ],
      mdp_utilisateur: [null,
        [Validators.required]
      ],
      type_utilisateur_id: [null,
        [Validators.required]
      ],
      confirm_mdp_utilisateur: [null,
        [Validators.required]
      ],
      rue_adresse: [null,
        [Validators.required]
      ],
      ville_adresse: [null,
        [Validators.required]
      ],
      cp_adresse: [null,
        [Validators.required]
      ],
      region_adresse: [null,
        [Validators.required]
      ],
    });

    super.createForm();

  }

  resetForm() {
    this.item.id = null;
    this.item.releaseDate = null;
    this.item.nom_utilisateur = null;
    this.item.prenom_utilisateur = null;
    this.item.mail_utilisateur = null;
    this.item.tel_utilisateur = null;
    this.item.mdp_utilisateur = null;
    this.item.confirm_mdp_utilisateur = null;
    this.item.type_utilisateur_id = null;
    this.item.rue_adresse = null;
    this.item.ville_adresse = null;
    this.item.cp_adresse = null;
    this.item.region_adresse = null;
    super.resetForm();
  }

  setFormValue(item: any) {

    this.form.controls.id.setValue(item.id);
    this.form.controls.nom_utilisateur.setValue(item.nom_utilisateur);
    this.form.controls.prenom_utilisateur.setValue(item.prenom_utilisateur);
    this.form.controls.mail_utilisateur.setValue(item.mail_utilisateur);
    this.form.controls.tel_utilisateur.setValue(item.tel_utilisateur);
    this.form.controls.mdp_utilisateur.setValue(item.mdp_utilisateur);
    this.form.controls.type_utilisateur_id.setValue(item.type_utilisateur_id);
    this.form.controls.rue_adresse.setValue(item.rue_adresse);
    this.form.controls.ville_adresse.setValue(item.ville_adresse);
    this.form.controls.cp_adresse.setValue(item.cp_adresse);
    this.form.controls.region_adresse.setValue(item.region_adresse);
    super.setFormValue(item);
  }

  get nom_utilisateur() {
    return this.form.get('nom_utilisateur');
  }
  get prenom_utilisateur() {
    return this.form.get('prenom_utilisateur');
  }
  get mail_utilisateur() {
    return this.form.get('mail_utilisateur');
  }
  get tel_utilisateur() {
    return this.form.get('tel_utilisateur');
  }
  get mdp_utilisateur() {
    return this.form.get('mdp_utilisateur');
  }
  get confirm_mdp_utilisateur() {
    return this.form.get('confirm_mdp_utilisateur');
  }
  get type_utilisateur_id() {
    return this.form.get('type_utilisateur_id');
  }
  get rue_adresse() {
    return this.form.get('rue_adresse');
  }
  get ville_adresse() {
    return this.form.get('ville_adresse');
  }
  get cp_adresse() {
    return this.form.get('cp_adresse');
  }
  get region_adresse() {
    return this.form.get('region_adresse');
  }
  backClicked() {
    this.location.back();
  }
}
