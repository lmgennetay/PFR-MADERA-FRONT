import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent extends PageListComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.user_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'deviss';
      this.link = 'devis';
      this.linkRoute = 'devis';

      this.placeholder = 'devis...';
      this.results = 'devis trouvés';
      this.found = 'quotes';
      this.creation = 'Quote';

      // this.loaded = false;

      this.icon = 'fas fa-file-medical';
      this.itemsCount = 0;
      this.itemsPerPage = 10;

      this.columns = [
        {
          type: 'num',
          title: {caption: 'N°', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info green font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Nom', class: 'text-info green font-weight-bold text-left'},
          data: {field: 'devi_nom', class: 'text-info text-left'}
        },
        {
          type: 'date',
          title: {caption: 'Date', class: 'text-info green font-weight-bold text-left'},
          data: {field: 'devi_date', class: 'text-info text-left'}
        },
        {
          type: 'euro',
          title: {caption: 'Prix', class: 'text-info green font-weight-bold text-left'},
          data: {field: 'devi_prix', class: 'text-info text-left'}
        },
        {
          type: 'delete',
          endPoint: 'devis',
          source: 'devis',
          title: { caption: 'Action', class: 'text-info green font-weight-bold text-left'},
          data: { field: 'id', class: 'text-info text-left' },
          count: this.itemsCount
        }
      ];

      super.initialize();
    }
  }

  backClicked() {
    this.location.back();
  }

}
