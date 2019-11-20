import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
  providers: [DatePipe]
})

export class QuotesFormComponent extends PageFormComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'quotes';
    this.titleForm = 'Formulaire Devis';
    this.icon = 'fas fa-file-medical';
    super.initialize();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      releaseDate: [Date.now(),
        [Validators.required]
      ],
      nameProjet: [null,
        [Validators.required]
      ],
      firstName: [null,
        [Validators.required]
      ],
      name: [null,
        [Validators.required]
      ],
      addressCustomer1: [null,
        [Validators.required]
      ],
      addressCustomer2: null,
      addressCustomer3: null,
      cp: [null,
        [Validators.required]
      ],
      city: [null,
        [Validators.required]
      ],
      phone: [null,
        [Validators.required]
      ],
      email: null,
      addressConstruction1: null,
      addressConstruction2: null,
      addressConstruction3: null,
      cpConstruction: null,
      cityConstruction: null
    });
    super.createForm();
  }
  resetForm() {
    this.item.id = null;
    this.item.releaseDate = Date.now();
    this.item.nameProjet = null;
    this.item.firstName = null;
    this.item.name = null;
    this.item.addressCustomer1 = null;
    this.item.addressCustomer2 = null;
    this.item.addressCustomer3 = null;
    this.item.cp = null;
    this.item.city = null;
    this.item.phone = null;
    this.item.email = null;
    this.item.addressConstruction1 = null;
    this.item.addressConstruction2 = null;
    this.item.addressConstruction3 = null;
    this.item.cpConstruction = null;
    this.item.cityConstruction = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.releaseDate.setValue(item.releaseDate);
    this.form.controls.nameProjet.setValue(item.nameProjet);
    this.form.controls.firstName.setValue(item.firstName);
    this.form.controls.name.setValue(item.name);
    this.form.controls.addressCustomer1.setValue(item.addressCustomer1);
    this.form.controls.addressCustomer2.setValue(item.addressCustomer2);
    this.form.controls.addressCustomer3.setValue(item.addressCustomer3);
    this.form.controls.cp.setValue(item.cp);
    this.form.controls.city.setValue(item.city);
    this.form.controls.phone.setValue(item.phone);
    this.form.controls.email.setValue(item.email);
    this.form.controls.addressConstruction1.setValue(item.addressConstruction1);
    this.form.controls.addressConstruction2.setValue(item.addressConstruction2);
    this.form.controls.addressConstruction3.setValue(item.addressConstruction3);
    this.form.controls.cpConstruction.setValue(item.cpConstruction);
    this.form.controls.cityConstruction.setValue(item.cityConstruction);
    super.setFormValue(item);
  }

  get name() {
    return this.form.get('name');
  }
  get nameProjet() {
    return this.form.get('nameProjet');
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get addressCustomer1() {
    return this.form.get('addressCustomer1');
  }
  get city() {
    return this.form.get('city');
  }
  get cp() {
    return this.form.get('cp');
  }
  get phone() {
    return this.form.get('phone');
  }

  backClicked() {
    this.location.back();
  }
}
