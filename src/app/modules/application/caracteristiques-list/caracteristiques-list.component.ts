import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './caracteristiques-list.component.html',
  styleUrls: ['./caracteristiques-list.component.css']
})
export class CaracteristiquesListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {

    this.endpoint = 'caracteristique/liste/module/1';
    this.link = 'caracteristique';
    this.linkRoute = 'caracteristiques';

    this.placeholder = 'caracteristiques...';
    this.results = 'caracteristiques trouvés';
    this.found = 'caracteristiques';
    this.creation = 'Caracteristique';

    // this.loaded = false;

    this.icon = 'fas fa-file-medical';
    this.itemsCount = 0;
    this.itemsPerPage = 10;

    this.columns = [
      {
        type: 'num',
        title: { caption: 'N°', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'N°', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        type: 'mm',
        title: { caption: 'Section', class: 'text-primary font-weight-bold' },
        data: { field: 'cara_section', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'mm',
        title: { caption: 'Hauteur', class: 'text-primary font-weight-bold' },
        data: { field: 'cara_hauteur', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'mm',
        title: { caption: 'Longueur', class: 'text-primary font-weight-bold' },
        data: { field: 'cara_longueur', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'angle',
        title: { caption: 'Type angle', class: 'text-primary font-weight-bold' },
        data: { field: 'cara_type_angle', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'd',
        title: { caption: 'Deger angle', class: 'text-primary font-weight-bold' },
        data: { field: 'cara_degre_angle', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'delete',
        endPoint: 'module',
        title: { caption: '', class: 'text-primary font-weight-bold text-right' },
        data: { field: 'id' }
      }
    ];

    super.initialize();
  }
}
