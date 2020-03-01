import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {

    this.endpoint = 'module/liste/devis/' + localStorage.devis_id;
    this.link = 'module';
    this.linkRoute = 'modules';

    this.placeholder = 'modules...';
    this.results = 'modules trouvés';
    this.found = 'modules';
    this.creation = 'Modules';

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
        title: { caption: 'Nom', class: 'text-primary font-weight-bold' },
        data: { field: 'modu_nom', class: 'text-primary font-weight-bold' }
      },
      {
        type: 'euro',
        title: { caption: 'Prix', class: 'text-primary font-weight-bold text-right' },
        data: { field: 'modu_prix_unitaire', class: 'text-primary font-weight-bold text-right' }
      },
      {
        type: 'delete',
        endPoint: 'module',
        title: { caption: 'Prix', class: 'text-primary font-weight-bold text-right' },
        data: { field: 'id' }
      }
    ];

    super.initialize();
    console.log(localStorage);
  }
}
