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
  listCouvertures: any;
  listCouverturesUrl: any;
  itemModules: any;

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
    if ( localStorage.user_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'module';
      this.titleForm = 'Formulaire Module';
      this.icon = 'fas fa-file-medical';

      this.listModules = '';
      this.listModulesUrl = 'module/liste/gamme/' + localStorage.gamme + '/type/1';

      this.listFamillesModules = '';
      this.listFamillesModulesUrl = 'type_module/liste';

      this.listIsolants = '';
      this.listIsolantsUrl = 'isolant/liste';
      this.listFinitionsInterieures = '';
      this.listFinitionsInterieuresUrl = 'finitionInterieur/liste';
      this.listFinitionsExterieures = '';
      this.listFinitionsExterieuresUrl = 'finitionExterieur/liste';
      this.listCouvertures = '';
      this.listCouverturesUrl = 'couverture/liste';
      this.listCoupesPrincipe = '';
      this.listCoupesPrincipeUrl = 'cctp/liste';
      super.initialize();
    }
  }
  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listModulesUrl).subscribe(data => {
      this.listModules = data.listeModule;
      this.form.controls.listModules.setValue(this.listModules);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFamillesModulesUrl).subscribe(data => {
      this.listFamillesModules = data.listeTypeModule;
      this.form.controls.listFamillesModules.setValue(this.listFamillesModules);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listIsolantsUrl).subscribe(data => {
      this.listIsolants = data.listeIsolant;
      this.form.controls.listIsolants.setValue(this.listIsolants);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFinitionsInterieuresUrl).subscribe(data => {
      this.listFinitionsInterieures = data.listeFinitionInterieur;
      this.form.controls.listFinitionsInterieures.setValue(this.listFinitionsInterieures);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listFinitionsExterieuresUrl).subscribe(data => {
      this.listFinitionsExterieures = data.listeFinitionExterieur;
      this.form.controls.listFinitionsExterieures.setValue(this.listFinitionsExterieures);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listCoupesPrincipeUrl).subscribe(data => {
      this.listCoupesPrincipe = data.listeCctp;
      this.form.controls.listCoupesPrincipe.setValue(this.listCoupesPrincipe);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listCoupesPrincipeUrl).subscribe(data => {
      this.listCoupesPrincipe = data.listeCctp;
      this.form.controls.listCoupesPrincipe.setValue(this.listCoupesPrincipe);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listCouverturesUrl).subscribe(data => {
      this.listCouvertures = data.listeCouverture;
      this.form.controls.listCouvertures.setValue(this.listCouvertures);
    });

    this.form = this.fb.group({
      id: null,
      resultat: null,
      modu_prix_total: null,
      devi_id: localStorage.devis_id,
      listFamillesModules: null,
      tymo_id: [null,
        [Validators.required]
      ],
      listModules: null,
      modu_id: null,
      modu_nom: [null,
        [Validators.required]
      ],
      modu_prix_unitaire: null,
      listIsolants: null,
      isol_id: null,
      listFinitionsInterieures: null,
      fiin_id: null,
      listFinitionsExterieures: null,
      fiex_id: null,
      listCoupesPrincipe: null,
      cctp_id: null,
      listCouvertures: null,
      couv_id: null
    });
    super.createForm();
  }
  resetForm() {
    this.item.id = null;
    this.item.resultat = null;
    this.item.modu_prix_total = null;
    this.item.devi_id = null;
    this.item.comm_id = localStorage.user_id;
    this.listFamillesModules = null;
    this.item.tymo_id = null;
    this.listModules = null;
    this.item.modu_id = null;
    this.item.modu_nom = null;
    this.item.modu_prix_unitaire = null;
    this.listIsolants = null;
    this.item.isol_id = null;
    this.listFinitionsInterieures = null;
    this.item.fiin_id = null;
    this.listFinitionsExterieures = null;
    this.item.fiex_id = null;
    this.listCoupesPrincipe = null;
    this.item.cctp_id = null;
    this.listCouvertures = null;
    this.item.couv_id = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    // console.log(item);
    item.devi_id = localStorage.devis_id;
    localStorage.module_id = item.id;
    this.form.controls.devi_id.setValue(item.devi_id);
    this.form.controls.id.setValue(item.id);
    this.form.controls.listFamillesModules.setValue(item.listFamillesModules);
    this.form.controls.tymo_id.setValue(item.tymo_id);

    this.form.controls.listModules.setValue(item.listModules);
    this.form.controls.modu_id.setValue(item.modu_id);

    this.form.controls.modu_nom.setValue(item.modu_nom);
    this.form.controls.modu_prix_unitaire.setValue(item.modu_prix_unitaire);

    this.form.controls.listIsolants.setValue(item.listIsolants);
    this.form.controls.isol_id.setValue(item.isol_id);
    this.form.controls.listFinitionsInterieures.setValue(item.listFinitionsInterieures);
    this.form.controls.fiin_id.setValue(item.fiin_id);
    this.form.controls.listFinitionsExterieures.setValue(item.listFinitionsExterieures);
    this.form.controls.fiex_id.setValue(item.fiex_id);
    this.form.controls.listCoupesPrincipe.setValue(item.listCoupesPrincipe);
    this.form.controls.cctp_id.setValue(item.cctp_id);
    this.form.controls.listCouvertures.setValue(item.listCouvertures);
    this.form.controls.couv_id.setValue(item.couv_id);
    super.setFormValue(item);
    console.log(localStorage);
  }

  get id() {
    return this.form.get('id');
  }
  get tymo_id() {
    return this.form.get('tymo_id');
  }
  get devi_id() {
    return this.form.get('devi_id');
  }
  get modu_id() {
    return this.form.get('modu_id');
  }
  get modu_nom() {
    return this.form.get('modu_nom');
  }
  get modu_prix_unitaire() {
    return this.form.get('modu_prix_unitaire');
  }
  get isol_id() {
    return this.form.get('isol_id');
  }
  get fiin_id() {
    return this.form.get('fiin_id');
  }
  get fiex_id() {
    return this.form.get('fiex_id');
  }
  get cctp_id() {
    return this.form.get('cctp_id');
  }
  get couv_id() {
    return this.form.get('couv_id');
  }

  backClicked() {
    this.location.back();
  }
  goCarac() {
    this.router.navigateByUrl('/caracteristiques/' + this.item.id);
  }

  onChangeTypeModule(newValue) {
    if (newValue !== undefined ) {
      console.log('TypeModule : '+ newValue);
      this.itemsService.getItemSelect(this.api,
        this.configService.config.url + 'module/liste/gamme/' + localStorage.gamme + '/type/' + newValue).subscribe(
        data => {
          this.listModules = data.listeModule;
          this.form.controls.listModules.setValue(this.listModules);
          this.form.controls.modu_id.setValue(newValue);
        }
      );
    }
  }

  onChangeModule(newValue) {
    if (newValue !== undefined ) {
      console.log('module : '+ newValue);
      this.itemsService.getItemSelect(this.api, this.configService.config.url + 'module/' + newValue ).subscribe(data => {
        this.itemModules = data;
        this.form.controls.isol_id.setValue(this.itemModules.isol_id);
        this.form.controls.fiin_id.setValue(this.itemModules.fiin_id);
        this.form.controls.fiex_id.setValue(this.itemModules.fiex_id);
        this.form.controls.cctp_id.setValue(this.itemModules.cctp_id);
        this.form.controls.couv_id.setValue(this.itemModules.couv_id);
      });
    }
  }
}
