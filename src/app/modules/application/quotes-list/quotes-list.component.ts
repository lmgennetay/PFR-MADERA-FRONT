import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    console.log(this.select);
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
        title: { caption: 'N°', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'N°', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Nom', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'devi_nom', class: 'text-primary font-weight-bold text-center' }
      },
      {
        type: 'date',
        title: { caption: 'Date', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'devi_date' , class: 'text-primary font-weight-bold text-center' }
      },
      {
        type: 'euro',
        title: { caption: 'Prix', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'devi_prix', class: 'text-primary font-weight-bold text-center' }
      }
    ];

    super.initialize();
  }

}
