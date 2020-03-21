import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './caracteristiques-list.component.html',
  styleUrls: ['./caracteristiques-list.component.css']
})
export class CaracteristiquesListComponent extends PageListComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.user_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'caracteristique/liste/module/' + localStorage.module_id;
      this.link = 'caracteristique';
      this.linkRoute = 'caracteristiques/' + localStorage.module_id;

      this.placeholder = 'caractéristiques...';
      this.results = 'caractéristiques trouvées';
      this.found = 'caracteristiques';
      this.creation = 'Caracteristique';

      // this.loaded = false;

      this.icon = 'fas fa-file-medical';
      this.itemsCount = 0;
      this.itemsPerPage = 10;

      this.columns = [
        {
          type: 'num',
          title: {caption: 'N°', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          type: 'mm',
          title: {caption: 'Section', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'cara_section', class: 'text-info tdTableBorder text-left'}
        },
        {
          type: 'mm',
          title: {caption: 'Hauteur', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'cara_hauteur', class: 'text-info tdTableBorder text-left'}
        },
        {
          type: 'mm',
          title: {caption: 'Longueur', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'cara_longueur', class: 'text-info tdTableBorder text-left'}
        },
        {
          type: 'angle',
          title: {caption: 'Type angle', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'cara_type_angle', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          type: 'd',
          title: {caption: 'Degré angle', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'cara_degre_angle', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          type: 'delete',
          endPoint: 'caracteristique',
          source: 'caracteristiques/' + localStorage.module_id,
          title: {caption: 'Action', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'id', class: 'text-info tdTableBorder text-left'}
        }
      ];

      super.initialize();
    }
  }

  backClicked() {
    this.location.back();
  }
}
