import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PageFormComponent } from '../../../components/page-form/page-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modules-form-carac-add',
  templateUrl: './caracteristiques-form.component.html',
  styleUrls: ['./caracteristiques-form.component.css'],
  providers: [DatePipe]
})

export class CaracteristiquesFormComponent extends PageFormComponent {
  public hiddenCustomOptions = false;

  listTypesAngles: any;
  listTypesAnglesUrl: any;

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    this.endpoint = 'caracteristique';
    this.titleForm = 'Formulaire Caractéristique';
    this.icon = 'fas fa-file-medical';
    this.listTypesAngles = '';
    this.listTypesAnglesUrl = 'typesAngles/list';
    super.initialize();
  }

  createForm() {
    this.itemsService.getItemSelect(this.api, this.configService.config.url + this.listTypesAnglesUrl).subscribe(data => {
      this.listTypesAngles = data.listTypesAngles;
      this.setFormValue(this.listTypesAngles);
    });

    this.form = this.fb.group({
      id: null,
      cara_section: [null,
        [Validators.required]
      ],
      cara_hauteur: [null,
        [Validators.required]
      ],
      cara_longueur: [null,
        [Validators.required]
      ],
      listTypesAngles: null,
      cara_type_angle: [null,
        [Validators.required]
      ],
      cara_angle: [null,
        [Validators.required]
      ],
    });
    super.createForm();
    console.log(localStorage);
  }
  resetForm() {
    this.item.id = null;
    this.item.cara_section = null;
    this.item.cara_hauteur = null;
    this.item.cara_longueur = null;
    this.listTypesAngles = null;
    this.item.cara_angle = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.cara_section.setValue(item.cara_section);
    this.form.controls.cara_hauteur.setValue(item.cara_hauteur);
    this.form.controls.cara_longueur.setValue(item.cara_longueur);
    this.form.controls.listTypesAngles.setValue(item.listTypesAngles);
    this.form.controls.cara_type_angle.setValue(item.cara_type_angle);
    this.form.controls.cara_angle.setValue(item.cara_angle);
    super.setFormValue(item);
  }

  get id() {
    return this.form.get('id');
  }
  get cara_section() {
    return this.form.get('cara_section');
  }
  get cara_hauteur() {
    return this.form.get('cara_hauteur');
  }
  get cara_longueur() {
    return this.form.get('cara_longueur');
  }
  get cara_type_angle() {
    return this.form.get('cara_type_angle');
  }
  get cara_angle() {
    return this.form.get('cara_angle');
  }
  backClicked() {
    this.location.back();
  }
}
