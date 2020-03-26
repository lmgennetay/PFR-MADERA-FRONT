import { Component, Injector } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Location } from '@angular/common';

import { PageFormComponent } from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent extends PageFormComponent {
  listPays: any;
  listPaysUrl: any;

  constructor(injector: Injector, private location: Location) {

    super(injector);

  }

  initialize() {
    if ( localStorage.date === undefined || (Date.now() - new Date(localStorage.date).getTime() ) >= 86400000 ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'client';
      this.titleForm = 'Formulaire Client';
      this.icon = 'fas fa-file-medical';
      this.listPays = '';
      this.listPaysUrl = 'pays/liste';
      super.initialize();
    }
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listPaysUrl).subscribe(data => {
      this.listPays = data.listePays;
      this.setFormValue(this.listPays);
    });

    this.form = this.fb.group({
      id: new FormControl({value: null, disabled: true}),
      pers_nom: [null,
        [Validators.required]
      ],
      pers_prenom: [null,
        [Validators.required]
      ],
      adre_rue: [null,
        [Validators.required]
      ],
      adre_complement: null,
      adre_info: null,
      adre_ville: [null,
        [Validators.required]
      ],
      adre_cp: [null,
        [Validators.required, Validators.pattern]
      ],
      adre_region: [null,
        [Validators.required]
      ],
      pers_mail: [null,
        [Validators.required, Validators.pattern]
      ],
      pers_tel: [null,
        [Validators.required, Validators.pattern]
      ],
      pers_sexe: [null,
        [Validators.required]
      ],
      listPays: null,
      pays_id: [null,
        [Validators.required]
      ],
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.pers_nom = null;
    this.item.pers_prenom = null;
    this.item.adre_rue = null;
    this.item.adre_complement = null;
    this.item.adre_info = null;
    this.item.adre_ville = null;
    this.item.adre_cp = null;
    this.item.adre_region = null;
    this.listPays = null;
    this.item.pays_id = null;
    this.item.pers_mail = null;
    this.item.pers_tel = null;
    this.item.pers_sexe = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.pers_nom.setValue(item.pers_nom);
    this.form.controls.pers_prenom.setValue(item.pers_prenom);
    this.form.controls.adre_rue.setValue(item.adre_rue);
    this.form.controls.adre_complement.setValue(item.adre_complement);
    this.form.controls.adre_info.setValue(item.adre_info);
    this.form.controls.adre_ville.setValue(item.adre_ville);
    this.form.controls.adre_cp.setValue(item.adre_cp);
    this.form.controls.adre_region.setValue(item.adre_region);
    this.form.controls.listPays.setValue(item.listPays);
    this.form.controls.pays_id.setValue(item.pays_id);
    this.form.controls.pers_mail.setValue(item.pers_mail);
    this.form.controls.pers_tel.setValue(item.pers_tel);
    this.form.controls.pers_sexe.setValue(item.pers_sexe);
    super.setFormValue(item);
  }
  onDelete() {
    // alert('client');
    let res: any;
    res = super.onDelete();
    this.router.navigate(['clients']);
  }

  onUpdate() {
    let res: any;
    delete this.item.comm_confirm_mdp;
    res = super.onUpdate();
    this.router.navigate(['clients']);
  }

  get id() {
    return this.form.get('id');
  }
  get comm_id() {
    return this.form.get('comm_id');
  }
  get pers_nom() {
    return this.form.get('pers_nom');
  }
  get pers_prenom() {
    return this.form.get('pers_prenom');
  }
  get adre_rue() {
    return this.form.get('adre_rue');
  }
  get adre_complement() {
    return this.form.get('adre_complement');
  }
  get adre_info() {
    return this.form.get('adre_info');
  }
  get adre_cp() {
    return this.form.get('adre_cp');
  }
  get adre_ville() {
    return this.form.get('adre_ville');
  }
  get adre_region() {
    return this.form.get('adre_region');
  }
  get pays_id() {
    return this.form.get('pays_id');
  }
  get pers_mail() {
    return this.form.get('pers_mail');
  }
  get pers_tel() {
    return this.form.get('pers_tel');
  }
  get pers_sexe() {
    return this.form.get('pers_sexe');
  }

  backClicked() {
    this.location.back();
  }
  goDevis() {
    this.router.navigateByUrl('/client/devis/' + this.item.id);
  }
}
