import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent extends PageListComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.user_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'clients';
      this.link = 'client';
      this.linkRoute = 'customers';

      this.placeholder = 'client...';
      this.results = 'clients trouvés';
      this.found = 'customers';
      this.creation = 'Customers';

      // this.loaded = false;

      this.icon = 'fas fa-file-medical';
      this.itemsCount = 0;
      this.itemsPerPage = 10;

      this.columns = [
        {
          type: 'num',
          title: {caption: 'N°', class: 'text-info green text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Nom', class: 'text-info green font-weight-bold text-left'},
          data: {field: 'pers_nom', class: 'text-info text-left'}
        },
        {
          title: {caption: 'Prénom', class: 'text-info green font-weight-bold text-left'},
          data: {field: 'pers_prenom', class: 'text-info text-left'}
        },
        // {
        //   title: {caption: 'Ville', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
        //   data: {field: 'adre_ville', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        // },
        {
          title: {caption: 'Email', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'pers_mail', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        // {
        //   title: {caption: 'Tel', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
        //   data: {field: 'pers_tel', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        // },
        {
          type: 'delete',
          endPoint: 'client',
          source: 'clients',
          title: { caption: 'Action', class: 'text-info green font-weight-bold text-left' },
          data: { field: 'id' }
        }
      ];
      super.initialize();
    }
  }

  backClicked() {
    this.location.back();
  }
}
