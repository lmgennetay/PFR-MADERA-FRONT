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
    if ( localStorage.comm_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'module/liste/devis/' + localStorage.devis_id;
      this.link = 'module';
      this.linkRoute = 'modules/devis/' + localStorage.devis_id;

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
          title: {caption: 'N°', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Nom', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'modu_nom', class: 'text-info tdTableBorder text-left'}
        },
        {
          type: 'euro',
          title: {caption: 'Prix', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'modu_prix_total', class: 'text-info tdTableBorder text-left'}
        },
        {
          type: 'delete',
          endPoint: 'module',
          source: 'modules/devis/' + localStorage.devis_id,
          title: {caption: 'Actions', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'id', class: 'text-info tdTableBorder text-left'}
        }
      ];

      super.initialize();
      localStorage.source = 'devis';
      // console.log(localStorage);
    }
  }

  backClicked() {
    this.location.back();
  }

}
