import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent extends PageListComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if (localStorage.date === undefined || (Date.now() - new Date(localStorage.date).getTime()) >= 86400000) {
      this.router.navigateByUrl('/');
    } else {
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
          title: {caption: 'N°', class: 'text-info font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Nom', class: 'text-info font-weight-bold'},
          data: {field: 'modu_nom', class: 'text-info text-left'}
        },
        {
          type: 'euro',
          title: {caption: 'Prix', class: 'text-info font-weight-bold text-left'},
          data: {field: 'modu_prix_unitaire', class: 'text-info text-left'}
        },
        {
          type: 'delete',
          endPoint: 'module',
          source: 'modules/devis/' + localStorage.devis_id,
          title: {caption: 'Prix', class: 'text-info font-weight-bold text-left'},
          data: {field: 'id'}
        }
      ];

      super.initialize();
      localStorage.source = 'devis';
      console.log(localStorage);
    }
  }

  backClicked() {
    this.location.back();
  }

}
