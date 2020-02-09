import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';
import {decimalDigest} from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
  providers: [DatePipe]
})

export class ProductsFormComponent extends PageFormComponent {
  private today = new Date();
  listProduits: any;
  listGammes: any;
  listModeles: any;
  listGammesUrl: any;
  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'product/';
    this.titleForm = 'Formulaire devis produit';
    this.icon = 'fas fa-file-medical';
    this.listProduits = '';
    this.listGammes = '';
    this.listGammesUrl = 'gamme/liste/';
    this.listModeles = '';

    // this.itemsService.getItemSelect(this.api, 'produit/liste').subscribe(data => {
    //   this.listProduits = data.listProduits;
    // });

    // this.listProduits.getItemSelect(this.api, 'gamme/liste').subscribe(data => {
    //   this.listGammes = data.listGammes;
    // });

    // this.listModeles.getItemSelect(this.api, 'model/liste').subscribe(data => {
    //   this.listeTypeUtilisateur = '';
    //   this.listModeles = data.listModeles;
    // });

    super.initialize();
  }

  createForm() {

    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listGammesUrl).subscribe(data => {
      this.listGammes = data.listeGammes;
      this.setFormValue(this.listGammes);
    });

    this.form = this.fb.group({
      id: null,
      releaseDate: [this.today,
        [Validators.required]
      ],
      product_id: [null,
        [Validators.required]
      ],
      listProduits: [null,
        [Validators.required]
      ],
      gammes_id: [null,
        [Validators.required]
      ],
      listGammes: [null,
        [Validators.required]
      ],
      modele_id: [null,
        [Validators.required]
      ],
      modelGamme: [null,
        [Validators.required]
      ],
      listModeles: [null,
        [Validators.required]
      ]
    });
    super.createForm();
  }

  resetForm() {
    this.item.id = null;
    this.item.releaseDate = null;
    this.item.product_id = null;
    this.listProduits = null;
    this.item.gammes_id = null;
    this.listGammes = null;
    this.item.modele_id = null;
    this.listModeles = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.product_id.setValue(item.product_id);
    this.form.controls.listProduits.setValue(item.listProduits);
    this.form.controls.gammes_id.setValue(item.gammes_id);
    this.form.controls.listGammes.setValue(item.listGammes);
    this.form.controls.modele_id.setValue(item.modele_id);
    this.form.controls.listModeles.setValue(item.listModeles);
    super.setFormValue(item);
  }

  get id() {
    return this.form.get('id');
  }
  get product_id() {
    return this.form.get('product_id');
  }
  get gammes_id() {
    return this.form.get('gammes_id');
  }
  get modele_id() {
    return this.form.get('modele_id');
  }
  backClicked() {
    this.location.back();
  }
}
