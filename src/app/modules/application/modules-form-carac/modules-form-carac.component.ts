import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modules-form-carac-add',
  templateUrl: './modules-form-carac.component.html',
  styleUrls: ['./modules-form-carac.component.css'],
  providers: [DatePipe]
})

export class ModulesFormCaracComponent extends PageFormComponent {
  public hiddenCustomOptions = false;

  listTypesAngles: any;
  listTypesAnglesUrl: any;

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'caracteristiques';
    this.titleForm = 'Formulaire Caractéristique';
    this.icon = 'fas fa-file-medical';
    this.listTypesAngles = '';
    this.listTypesAnglesUrl = 'typesAngles/list';
    super.initialize();
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listTypesAnglesUrl).subscribe(data => {
      this.listTypesAngles = data.listTypesAngles;
      this.setFormValue(this.listTypesAngles);
    });

    this.form = this.fb.group({
      id: null,
      section: [null,
        [Validators.required]
      ],
      hauteur: [null,
        [Validators.required]
      ],
      longueur: [null,
        [Validators.required]
      ],
      listTypesAngles: null,
      cara_type_angle: [null,
        [Validators.required]
      ],
      degre: [null,
        [Validators.required]
      ],
    });
    super.createForm();
  }
  resetForm() {
    this.item.id = null;
    this.item.section = null;
    this.item.hauteur = null;
    this.item.longueur = null;
    this.listTypesAngles = null;
    this.item.degre = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.devi_nom.setValue(item.devi_nom);
    this.form.controls.listModules.setValue(item.listModules);
    this.form.controls.clie_id.setValue(item.clie_id);
    this.form.controls.listIsolants.setValue(item.listIsolants);
    this.form.controls.maison_id.setValue(item.maison_id);
    this.form.controls.listFamillesModules.setValue(item.listFamillesModules);
    this.form.controls.gamm_id.setValue(item.gamm_id);
    this.form.controls.listFinitionsInterieures.setValue(item.listFinitionsInterieures);
    this.form.controls.pays_id.setValue(item.pays_id);
    this.form.controls.adre_region.setValue(item.adre_region);
    this.form.controls.adre_ville.setValue(item.adre_ville);
    this.form.controls.adre_cp.setValue(item.adre_cp);
    this.form.controls.adre_rue.setValue(item.adre_rue);
    this.form.controls.adre_commplement.setValue(item.adre_commplement);
    this.form.controls.adre_info.setValue(item.adre_info);
    super.setFormValue(item);
  }

  get id() {
    return this.form.get('id');
  }
  get devi_nom() {
    return this.form.get('devi_nom');
  }
  get clie_id() {
    return this.form.get('clie_id');
  }
  get maison_id() {
    return this.form.get('maison_id');
  }
  get gamm_id() {
    return this.form.get('gamm_id');
  }
  get pays_id() {
    return this.form.get('pays_id');
  }
  backClicked() {
    this.location.back();
  }
}
