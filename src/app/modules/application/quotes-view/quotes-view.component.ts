import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-view.component.html',
  styleUrls: ['./quotes-view.component.css'],
  providers: [DatePipe]
})

export class QuotesViewComponent extends PageFormComponent {
  listClients: any;
  listClientsUrl: any;
  listCommercials: any;
  listCommercialsUrl: any;
  listGammes: any;
  listGammesUrl: any;
  listMaisons: any;
  listMaisonsUrl: any;
  listPays: any;
  listPaysUrl: any;
  listEtats: any;
  listEtatsUrl: any;
  listEtapes: any;
  listEtapesUrl: any;
  listModules: any;
  listModulesUrl: any;
  id: any;
  comm_id: any;
  devi_nom: any;
  devi_date: any;
  item: any;
  clie_id: any;
  mais_id: any;
  gamm_id: any;
  pays_id: any;
  adre_region: any;
  adre_ville: any;
  adre_cp: any;
  adre_rue: any;
  adre_complement: any;
  adre_info: any;
  devi_prix: any;
  pays: any;
  clientN: any;
  clientP: any;
  gamme: any;
  maison: any;
  etat: any;
  etape: any;
  etat_id: any;
  etap_id: any;
  commercialN: any;
  commercialP: any;
  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.comm_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.id = this.route.snapshot.paramMap.get('id');
      this.endpoint = 'devis';
      this.titleForm = 'Formulaire Devis';
      this.icon = 'fas fa-file-medical';
      this.listClients = '';
      this.listClientsUrl = 'clients';
      this.listCommercials = '';
      this.listCommercialsUrl = 'commercials';
      this.listGammes = '';
      this.listGammesUrl = 'gamme/liste';
      this.listMaisons = '';
      this.listMaisonsUrl = 'maison/liste';
      this.listPays = '';
      this.listPaysUrl = 'pays/liste';
      this.listEtapes = '';
      this.listEtapesUrl = 'etapes';
      this.listEtats = '';
      this.listEtatsUrl = 'etats';
      this.listModules = '';
      this.listModulesUrl = 'module/liste/devis/' + this.id;
      super.initialize();
    }
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listCommercialsUrl).subscribe(data => {
      // console.log(data);
      this.listCommercials = data.listeCommercials;
      this.listCommercials = this.listCommercials;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listClientsUrl).subscribe(data => {
      this.listClients = data.listeClients;
      this.listClients = this.listClients;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listGammesUrl).subscribe(data => {
      this.listGammes = data.listeGamme;
      this.listGammes = this.listGammes;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listMaisonsUrl).subscribe(data => {
      this.listMaisons = data.listeMaison;
      this.listMaisons = this.listMaisons;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listPaysUrl).subscribe(data => {
      this.listPays = data.listePays;
      this.listPays = this.listPays;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listEtatsUrl).subscribe(data => {
      this.listEtats = data.listeEtat;
      this.listEtats = this.listEtats;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listEtapesUrl).subscribe(data => {
      this.listEtapes = data.listeEtape;
      this.listEtapes = this.listEtapes;
    });

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listModulesUrl).subscribe(data => {
      this.listModules = data.listeModule;
      this.listModules = this.listModules;
    });
  }

  setFormValue(item: any) {

    this.id = item.id;
    this.comm_id = item.comm_id;
    this.devi_nom = item.devi_nom;
    this.devi_date = this.formatDate(item.devi_date);
    this.clie_id = item.clie_id;
    this.mais_id = item.mais_id;
    this.gamm_id = item.gamm_id;
    this.etat_id = item.etat_id;
    this.etap_id = item.etap_id;
    this.adre_ville = item.adre_ville;
    this.adre_cp = item.adre_cp;
    this.adre_rue = item.adre_rue;
    this.adre_region = item.adre_region;
    this.adre_complement = item.adre_complement;
    this.adre_info = item.adre_info;
    this.devi_prix = item.devi_prix;

    const pays = this.listPays;
    Array.prototype.forEach.call( pays, obj => {
      if (obj.id === item.pays_id) {
        this.pays = obj.pays_nom;
      }
    });

    const client = this.listClients;
    Array.prototype.forEach.call( client, obj => {
      if (obj.id === item.clie_id) {
        this.clientN = obj.pers_nom;
        this.clientP = obj.pers_prenom;
      }
    });

    const maison = this.listMaisons;
    Array.prototype.forEach.call( maison, obj => {
      if (obj.id === item.mais_id) {
        this.maison = obj.mais_nom;
      }
    });

    const gamme = this.listGammes;
    Array.prototype.forEach.call( gamme, obj => {
      if (obj.id === item.gamm_id) {
        this.gamme = obj.gamm_nom;
      }
    });

    const etat = this.listEtats;
    Array.prototype.forEach.call( etat, obj => {
      if (obj.id === item.etat_id) {
        this.etat = obj.etat_nom;
      }
    });

    const etape = this.listEtapes;
    Array.prototype.forEach.call( etape, obj => {
      if (obj.id === item.etap_id) {
        this.etape = obj.etap_nom;
      }
    });

    const commercial = this.listCommercials;
    Array.prototype.forEach.call( commercial, obj => {
      if (obj.id === item.comm_id) {
        this.commercialN = obj.pers_nom;
        this.commercialP = obj.pers_prenom;
      }
    });


    super.setFormValue(item);
  }

  backClicked() {
    this.location.back();
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [day, month, year].join('/');
  }
}
