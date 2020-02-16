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
      listFamillesModules: null,
      fami_modu_id: [null,
        [Validators.required]
      ],
      listModules: null,
      modu_id: [null,
        [Validators.required]
      ],
      modu_nom: [null,
        [Validators.required]
      ],
      listIsolants: null,
      isol_id: null,
      listFinitionsInterieures: null,
      fini_inte_id: null,
      listFinitionsExterieures: null,
      fini_exte_id: null,
      listCoupesPrincipe: null,
      coup_princ_id: null
    });
    super.createForm();
  }
  resetForm() {
    this.item.id = null;
    this.listFamillesModules = null;
    this.item.fami_modu_id = null;
    this.listModules = null;
    this.item.modu_id = null;
    this.item.modu_nom = null;
    this.listIsolants = null;
    this.item.isol_id = null;
    this.listFinitionsInterieures = null;
    this.item.fini_inte_id = null;
    this.listFinitionsExterieures = null;
    this.item.fini_exte_id = null;
    this.listCoupesPrincipe = null;
    this.item.coup_princ_id = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.listFamillesModules.setValue(item.listFamillesModules);
    this.form.controls.fami_modu_id.setValue(item.fami_modu_id);
    this.form.controls.listModules.setValue(item.listModules);
    this.form.controls.modu_id.setValue(item.modu_id);
    this.form.controls.listIsolants.setValue(item.listIsolants);
    this.form.controls.isol_id.setValue(item.isol_id);
    this.form.controls.listFinitionsInterieures.setValue(item.listFinitionsInterieures);
    this.form.controls.fini_inte_id.setValue(item.fini_inte_id);
    this.form.controls.listFinitionExterieure.setValue(item.listFinitionExterieure);
    this.form.controls.fini_exte_id.setValue(item.fini_exte_id);
    this.form.controls.listCoupePrincipe.setValue(item.listCoupePrincipe);
    this.form.controls.coup_princ_id.setValue(item.coup_princ_id);
    super.setFormValue(item);
  }

  get id() {
    return this.form.get('id');
  }
  get fami_modu_id() {
    return this.form.get('fami_modu_id');
  }
  get modu_id() {
    return this.form.get('modu_id');
  }
  get modu_nom() {
    return this.form.get('modu_nom');
  }
  get isol_id() {
    return this.form.get('isol_id');
  }
  get fini_inte_id() {
    return this.form.get('fini_inte_id');
  }
  get fini_exte_id() {
    return this.form.get('fini_exte_id');
  }
  get coup_princ_id() {
    return this.form.get('coup_princ_id');
  }
  
  backClicked() {
    this.location.back();
  }
  goCarac() {
    this.router.navigateByUrl('/CaracteristiquesModule/' + this.item.id);
  }
}
