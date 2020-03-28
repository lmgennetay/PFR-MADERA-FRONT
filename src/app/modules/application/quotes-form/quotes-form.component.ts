import { Component, Injector } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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
    if ( localStorage.date === undefined || (Date.now() - new Date(localStorage.date).getTime() ) >= 86400000 ) {
      this.router.navigateByUrl('/');
    } else {
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
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listClientsUrl).subscribe(data => {
      this.listClients = data.listeClients;
      this.form.controls.listClients.setValue(this.listClients);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listGammesUrl).subscribe(data => {
      this.listGammes = data.listeGamme;
      this.form.controls.listGammes.setValue(this.listGammes);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listMaisonsUrl).subscribe(data => {
      this.listMaisons = data.listeMaison;
      this.form.controls.listMaisons.setValue(this.listMaisons);
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listPaysUrl).subscribe(data => {
      this.listPays = data.listePays;
      this.form.controls.listPays.setValue(this.listPays);
    });

    this.form = this.fb.group({
      id: null,
      resultat: null,
      etap_id: null,
      etat_id: null,
      comm_id: localStorage.comm_id,
      devi_nom: [null,
        [Validators.required]
      ],
      devi_date: null,
      listClients: null,
      clie_id: [null,
        [Validators.required]
      ],
      listMaisons: null,
      mais_id: [null,
        [Validators.required]
      ],
      listGammes: null,
      gamm_id: [null,
        [Validators.required]
      ],
      listPays: null,
      pays_id: [null,
        [Validators.required]
      ],
      adre_region: [null,
        [Validators.required]
      ],
      adre_ville:  [null,
        [Validators.required]
      ],
      adre_cp: [null,
        [Validators.required, Validators.pattern]
      ],
      adre_rue: [null,
        [Validators.required]
      ],
      adre_complement: null,
      adre_info: null,
      devi_prix: new FormControl({value: 0.00, disabled: true}),
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.resultat = null;
    this.item.etap_id = null;
    this.item.etat_id = null;
    this.item.comm_id = localStorage.comm_id;
    this.item.devi_date = null;
    this.item.devi_nom = null;
    this.listClients = null;
    this.item.clie_id = null;
    this.listMaisons = null;
    this.item.mais_id = null;
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
    this.item.devi_prix = 0.00;
    super.resetForm();
  }

  setFormValue(item: any) {
    // console.log(item);
    this.form.controls.resultat.setValue('');
    this.form.controls.etap_id.setValue(item.etap_id);
    this.form.controls.etat_id.setValue(item.etat_id);
    this.form.controls.id.setValue(item.id);
    if ( item.comm_id == undefined ) {
      this.form.controls.comm_id.setValue( localStorage.comm_id );
    } else {
      this.form.controls.comm_id.setValue(item.comm_id);
    }
    this.form.controls.devi_date.setValue(item.devi_date);
    this.form.controls.devi_nom.setValue(item.devi_nom);
    this.form.controls.listClients.setValue(item.listClients);
    this.form.controls.clie_id.setValue(item.clie_id);
    this.form.controls.listMaisons.setValue(item.listMaisons);
    this.form.controls.mais_id.setValue(item.mais_id);
    this.form.controls.listGammes.setValue(item.listGammes);
    this.form.controls.gamm_id.setValue(item.gamm_id);
    this.form.controls.listPays.setValue(item.listPays);
    this.form.controls.pays_id.setValue(item.pays_id);
    this.form.controls.adre_region.setValue(item.adre_region);
    this.form.controls.adre_ville.setValue(item.adre_ville);
    this.form.controls.adre_cp.setValue(item.adre_cp);
    this.form.controls.adre_rue.setValue(item.adre_rue);
    this.form.controls.adre_complement.setValue(item.adre_complement);
    this.form.controls.adre_info.setValue(item.adre_info);
    this.form.controls.devi_prix.setValue(item.devi_prix);
    super.setFormValue(item);
    localStorage.devis_id = this.form.get('id').value;
    // console.log(localStorage);
  }

  get id() {
    return this.form.get('id');
  }
  get comm_id() {
    return this.form.get('comm_id');
  }
  get devi_date() {
    return this.form.get('devi_date');
  }
  get devi_nom() {
    return this.form.get('devi_nom');
  }
  get clie_id() {
    return this.form.get('clie_id');
  }
  get mais_id() {
    return this.form.get('mais_id');
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
  get adre_complement() {
    return this.form.get('adre_complement');
  }
  get adre_info() {
    return this.form.get('adre_info');
  }
  get devi_prix() {
    return this.form.get('devi_prix');
  }
  backClicked() {
    this.router.navigateByUrl('/devis');
  }
  goView() {
    this.router.navigateByUrl('/devis/view/' +  this.item.id);
  }

  goModule() {
    localStorage.gamme = this.form.get('gamm_id').value;
    localStorage.source = 'module';
    this.router.navigateByUrl('/modules/devis/' + this.item.id);
  }
}
