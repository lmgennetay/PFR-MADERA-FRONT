import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modules-form',
  templateUrl: './modules-form.component.html',
  styleUrls: ['./modules-form.component.css'],
  providers: [DatePipe]
})

export class ModulesFormComponent extends PageFormComponent {
  public hiddenCustomOptions = false;

  listModules: any;
  listModulesUrl: any;
  listFamillesModules: any;
  listFamillesModulesUrl: any;
  listIsolants: any;
  listIsolantsUrl: any;
  listFinitionsInterieures: any;
  listFinitionsInterieuresUrl: any;
  listFinitionsExterieures: any;
  listFinitionsExterieuresUrl: any;
  listCoupesPrincipe: any;
  listCoupesPrincipeUrl: any;

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  showCustomOptions() {
    if (this.hiddenCustomOptions === false) {
      this.hiddenCustomOptions = true;
    } else {
      this.hiddenCustomOptions = false;
    }
  }

  initialize() {
    this.endpoint = 'modules';
    this.titleForm = 'Formulaire Module';
    this.icon = 'fas fa-file-medical';
    this.listModules = '';
    this.listModulesUrl = 'modules';
    this.listFamillesModules = '';
    this.listFamillesModulesUrl = 'famillesModules/liste';
    this.listIsolants = '';
    this.listIsolantsUrl = 'isolants/liste';
    this.listFinitionsInterieures = '';
    this.listFinitionsInterieuresUrl = 'finitionsInterieures/liste';
    this.listFinitionsExterieures = '';
    this.listFinitionsExterieuresUrl = 'finitionsExterieures/liste';
    this.listCoupesPrincipe = '';
    this.listCoupesPrincipeUrl = 'coupesPrincipe/liste';
    super.initialize();
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listModulesUrl).subscribe(data => {
      this.listModules = data.listModule;
      this.setFormValue(this.listModules);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFamillesModulesUrl).subscribe(data => {
      this.listFamillesModules = data.listeFamilleModule;
      this.setFormValue(this.listFamillesModules);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listIsolantsUrl).subscribe(data => {
      this.listIsolants = data.listIsolant;
      this.setFormValue(this.listIsolants);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFinitionsInterieuresUrl).subscribe(data => {
      this.listFinitionsInterieures = data.listFinitionInterieure;
      this.setFormValue(this.listFinitionsInterieures);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFinitionsExterieuresUrl).subscribe(data => {
      this.listFinitionsExterieures = data.listFinitionExterieure;
      this.setFormValue(this.listFinitionsExterieures);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listCoupesPrincipeUrl).subscribe(data => {
      this.listCoupesPrincipe = data.listCoupePrincipe;
      this.setFormValue(this.listCoupesPrincipe);
    });

    this.form = this.fb.group({
      id: null,
      listModules: [null,
        [Validators.required]
      ],
      modu_nom: [null,
        [Validators.required]
      ],
      listIsolants: [null,
        [Validators.required]
      ],
      maison_id: [null,
        [Validators.required]
      ],
      listFamillesModules: [null,
        [Validators.required]
      ],
      gamm_id: [null,
        [Validators.required]
      ],
      listFinitionsInterieures: null,
      pays_id: null,
      adre_region: null,
      adre_ville:  null,
      adre_cp: null,
      adre_rue: null,
      adre_commplement: null,
      adre_info: null
    });
    super.createForm();
  }
  resetForm() {
    this.item.id = null;
    this.item.devi_nom = null;
    this.listModules = null;
    this.item.clie_id = null;
    this.listIsolants = null;
    this.item.maison_id = null;
    this.listFamillesModules = null;
    this.item.gamm_id = null;
    this.listFinitionsInterieures = null;
    this.item.pays_id = null;
    this.item.adre_region = null;
    this.item.adre_ville = null;
    this.item.adre_cp = null;
    this.item.adre_rue = null;
    this.item.adre_commplement = null;
    this.item.adre_info = null;
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
  get adre_region() {
    return this.form.get('adre_region');
  }
  get adre_ville() {
    return this.form.get('adre_ville');
  }
  get adre_cp() {
    return this.form.get('adre_cp');
  }
  get adre_rue() {
    return this.form.get('adre_rue');
  }
  get adre_commplement() {
    return this.form.get('adre_commplement');
  }
  get adre_info() {
    return this.form.get('adre_info');
  }
  backClicked() {
    this.location.back();
  }
  goCarac() {
    this.router.navigateByUrl('/CaracteristiquesModule/' + this.item.id);
  }
}
