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
  listClients: any;
  listClientsUrl: any;
  listGammes: any;
  listGammesUrl: any;
  listMaisons: any;
  listMaisonsUrl: any;
  listPays: any;
  listPaysUrl: any;

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'devis';
    this.titleForm = 'Formulaire Devis';
    this.icon = 'fas fa-file-medical';
    this.listClients = '';
    this.listClientsUrl = 'clients';
    this.listGammes = '';
    this.listGammesUrl = 'gamme/liste';
    this.listMaisons = '';
    this.listMaisonsUrl = 'maison/liste';
    this.listPays = '';
    this.listPaysUrl = 'pays/liste';
    super.initialize();
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listClientsUrl).subscribe(data => {
      this.listClients = data.listeClients;
      console.log(this.listClients);
      this.setFormValue(this.listClients);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listGammesUrl).subscribe(data => {
      this.listGammes = data.listeGamme;
      console.log(this.listGammes);
      this.setFormValue(this.listGammes);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listMaisonsUrl).subscribe(data => {
      this.listMaisons = data.listeMaison;
      console.log( this.listMaisons);
      this.setFormValue(this.listMaisons);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listPaysUrl).subscribe(data => {
      this.listPays = data.listePays;
      console.log(this.listPays);
      this.setFormValue(this.listPays);
    });

    this.form = this.fb.group({
      id: null,
      devi_nom: [null,
        [Validators.required]
      ],
      listClients: [null,
        [Validators.required]
      ],
      clie_id: [null,
        [Validators.required]
      ],
      listMaisons: [null,
        [Validators.required]
      ],
      maison_id: [null,
        [Validators.required]
      ],
      listGammes: [null,
        [Validators.required]
      ],
      gamm_id: [null,
        [Validators.required]
      ],
      listPays: null,
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
    this.listClients = null;
    this.item.clie_id = null;
    this.listMaisons = null;
    this.item.maison_id = null;
    this.listGammes = null;
    this.item.gamm_id = null;
    this.listPays = null;
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
    this.form.controls.listClients.setValue(item.listClients);
    this.form.controls.clie_id.setValue(item.clie_id);
    this.form.controls.listMaisons.setValue(item.listMaisons);
    this.form.controls.maison_id.setValue(item.maison_id);
    this.form.controls.listGammes.setValue(item.listGammes);
    this.form.controls.gamm_id.setValue(item.gamm_id);
    this.form.controls.listPays.setValue(item.listPays);
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
}
