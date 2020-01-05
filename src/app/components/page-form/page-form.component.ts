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
  urlSelect: any;
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
    this.urlSelect = this.configService.config.url + this.select;
  }

  createForm() {
  }

  login() {
    this.item = this.form.value;
    this.itemsService.login(this.url, this.item).subscribe(data => {
      localStorage.token = data.token_utilisateur;
      console.log(data.result);
      console.log(localStorage.getItem('token'));
      if ( data.result === 'OK' && ( data.token !== null || data.token !== undefined) ) {
        console.log('oui');
        this.router.navigate(['accueil']);
      } else {
        console.log('non');
        this.router.navigate(['']);
      }
    });
  }

  getItemById(): void {
    this.route.params.subscribe(params => {
      console.log(this.url );
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
    const id = this.item.id;
    if ((id === null) || (id === undefined)) {
      this.createItem(this.url, this.item);
    } else {
      this.updateItem(this.url, this.item, id);
    }
  }

  onDelete() {
    if ((this.item.id !== undefined) && (this.item.id != null)) {
      this.deleteItem(this.url, this.item.id);
    }
  }

  onCopy() {
    this.item.id = null;
    this.form.get('id').setValue(null);
  }

  createItem(url: any, item: any) {
    delete this.item.id;
    this.itemsService.addItem(url, item)
      .subscribe(data => {
        this.item = data;
      });
  }

  updateItem(url: any, item: any, id: number) {
    this.itemsService.updateItem(item, id, url)
      .subscribe(data => {
        this.item = data;
        this.form.setValue(this.item);
      });
  }

  deleteItem(url: any, id: number) {
    this.itemsService.deleteItem(url, id)
      .subscribe(data => {
        this.resetForm();
      });
  }

}
