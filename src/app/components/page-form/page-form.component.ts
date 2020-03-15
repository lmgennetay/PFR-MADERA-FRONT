import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '../../services/config/config.service';
import { ItemsService } from '../../services/items/items.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {

  api: any;
  url: any;
  loginId: string;
  loginToken: string;
  urlSelect: any;
  urlParent: any;
  endpoint: any;
  select: any;
  icon: any;
  form: FormGroup;
  item: any = {};
  titleForm: any = {};
  listeTypeUtilisateur: string;
  public route: ActivatedRoute;
  public router: Router;
  public configService: ConfigService;
  public itemsService: ItemsService;
  public fb: FormBuilder;

  constructor(injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.configService = injector.get(ConfigService);
    this.itemsService = injector.get(ItemsService);
    this.fb = injector.get(FormBuilder);

    this.initialize();
    this.createForm();
    this.getItemById();
  }

  initialize() {
      this.api = this.configService.config.api;
      this.url = this.configService.config.url + this.endpoint;
      this.url = this.configService.config.url + this.endpoint;
  }

  createForm() {
  }

  login() {
      this.item = this.form.value;
      this.itemsService.login(this.url, this.item).subscribe(data => {
          if ( data.result === 'OK' && ( data.token !== null || data.token !== undefined) ) {
              localStorage.token = data.token_utilisateur;
              localStorage.user_id = data.id;
              localStorage.date = data.datetoken_utilisateur;
              this.router.navigate(['accueil']);
          } else {
              this.router.navigate(['']);
          }
      });
  }

  getItemById(): void {
      this.route.params.subscribe(params => {
          if (params.id !== undefined) {
              this.itemsService.getItem(this.api, this.url, params.id).subscribe(data => {
                  if ((data !== null) && (data !== undefined)) {
                      this.item = data;
                      this.setFormValue(this.item);
                  } else {
                      this.resetForm();
                  }
              });
          }
      });
  }

  resetForm() {
     this.setFormValue(this.item);
  }

  setFormValue(item: any) {
  }

  onCreate() {
     this.resetForm();
  }

  onUpdate() {
      this.item = this.form.value;
      if ((this.item.id === null) || (this.item.id === undefined)) {
         this.createItem(this.url, this.item);
      } else {
          this.updateItem(this.url, this.item, this.item.id);
      }
  }

  onDelete() {
    // alert('page ' + this.url);
    this.item.connection = {loginId : localStorage.user_id, loginToken : localStorage.token};
    if ((this.item.id !== undefined) && (this.item.id != null)) {
      this.deleteItem(this.url, this.item);
    }
  }

  onCopy() {
    this.item.connection = {loginId : localStorage.user_id, loginToken : localStorage.token};
    this.item.id = null;
    // this.form.get('id').setValue(null);
    if ((this.item.id === null) || (this.item.id === undefined)) {
      this.createItem(this.url, this.item);
    } else {
      this.updateItem(this.url, this.item, this.item.id);
    }
  }

  createItem(url: any, item: any) {
    this.item.connection = {loginId : localStorage.user_id, loginToken : localStorage.token};
    delete this.item.id;
    console.log(url);
    this.itemsService.addItem(url, item)
      .subscribe(data => {
        this.item = data;
        // alert('Création effectuée');
      });
  }

  updateItem(url: any, item: any, id: number) {
    this.item.connection = {loginId : localStorage.user_id, loginToken : localStorage.token};
    this.itemsService.updateItem(item, id, url)
      .subscribe(data => {
        this.item = data;
        console.log(data);
        this.form.setValue(this.item);
        // alert('les données ont été modifiées');
      });
  }

  deleteItem(url: any, item: any) {
    this.item.connection = {loginId : localStorage.user_id, loginToken : localStorage.token};
    // alert('url ' + url);
    this.itemsService.deleteItem(url, item)
    .subscribe(data => {
      this.resetForm();
    });
  }

}
