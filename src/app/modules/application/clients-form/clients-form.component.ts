import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-client',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent extends PageFormComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'clients';
    this.titleForm = 'Formulaire Client';
    this.icon = 'fas fa-file-medical';
    super.initialize();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      releaseDate: null,
      nom: null,
      prenom: null,
      adresse: null,
      cp: null,
      ville: null,
      email: null,
      tel: null
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.releaseDate = null;
    this.item.nom = null;
    this.item.prenom = null;
    this.item.adresse = null;
    this.item.cp = null;
    this.item.ville = null;
    this.item.email = null;
    this.item.tel = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.releaseDate.setValue(item.releaseDate);
    this.form.controls.nom.setValue(item.nom);
    this.form.controls.prenom.setValue(item.prenom);
    this.form.controls.adresse.setValue(item.adresse);
    this.form.controls.cp.setValue(item.cp);
    this.form.controls.ville.setValue(item.ville);
    this.form.controls.email.setValue(item.email);
    this.form.controls.tel.setValue(item.tel);
    super.setFormValue(item);
  }

  get nom() {
    return this.form.get('nom');
  }
  get prenom() {
    return this.form.get('prenom');
  }
  get adresse() {
    return this.form.get('adresse');
  }
  get cp() {
    return this.form.get('cp');
  }
  get ville() {
    return this.form.get('ville');
  }
  get email() {
    return this.form.get('email');
  }
  get tel() {
    return this.form.get('tel');
  }
}
