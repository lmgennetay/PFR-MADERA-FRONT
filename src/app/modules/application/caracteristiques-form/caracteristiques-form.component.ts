import { Component, Injector } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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
    if ( localStorage.comm_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'caracteristique';
      this.titleForm = 'Formulaire Caractéristique';
      this.icon = 'fas fa-file-medical';
      this.listTypesAngles = '';
      this.listTypesAnglesUrl = 'typesAngles/list';
      super.initialize();
    }
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      modu_id: localStorage.module_id,
      cara_section: [null,
        [Validators.required, Validators.pattern]
      ],
      cara_hauteur: [null,
        [Validators.required, Validators.pattern]
      ],
      cara_longueur: [null,
        [Validators.required, Validators.pattern]
      ],
      listTypesAngles: 0,
      cara_type_angle: [null,
        [Validators.required]
      ],
      cara_degre_angle: [null,
        [Validators.required, Validators.pattern]
      ],
    });
    super.createForm();
    // console.log(localStorage);
  }
  resetForm() {
    if ( this.item.modu_id === undefined) {
      this.item.modu_id = localStorage.module_id;
    } else {
      this.item.modu_id = null;
    }
    this.item.id = null;
    this.item.cara_section = null;
    this.item.cara_hauteur = null;
    this.item.cara_longueur = null;
    this.item.cara_type_angle = null;
    this.item.cara_degre_angle = null;
    super.resetForm();
  }

  setFormValue(item: any) {
    this.form.controls.id.setValue(item.id);
    this.form.controls.modu_id.setValue(item.modu_id);
    this.form.controls.cara_section.setValue(item.cara_section);
    this.form.controls.cara_hauteur.setValue(item.cara_hauteur);
    this.form.controls.cara_longueur.setValue(item.cara_longueur);
    this.form.controls.cara_type_angle.setValue(item.cara_type_angle);
    this.form.controls.cara_degre_angle.setValue(item.cara_degre_angle);
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
  get cara_degre_angle() {
    return this.form.get('cara_degre_angle');
  }
  get modu_id() {
    return this.form.get('modu_id');
  }
  backClicked() {
    this.location.back();
  }
}
