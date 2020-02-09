import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modules-form-carac-add',
  templateUrl: './modules-form-carac-add.component.html',
  styleUrls: ['./modules-form-carac-add.component.css'],
  providers: [DatePipe]
})

export class ModulesFormCaracAddComponent extends PageFormComponent {
  public hiddenCustomOptions = false;

  listTypesAngles: any;
  listTypesAnglesUrl: any;

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  showCustomOptions() {
    if (this.hiddenCustomOptions == false) {
      this.hiddenCustomOptions = true;
    } else {
      this.hiddenCustomOptions = false;
    }
  }

  initialize() {
    this.endpoint = 'modules';
    this.titleForm = 'Formulaire Module';
    this.icon = 'fas fa-file-medical';
    this.listTypesAngles = '';
    this.listTypesAnglesUrl = 'modules';
    super.initialize();
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listTypesAnglesUrl).subscribe(data => {
      this.listTypesAngles = data.listModule;
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
      listTypesAngles: [null,
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
