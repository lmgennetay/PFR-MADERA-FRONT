import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {

    this.endpoint = 'commercial';
    this.link = 'user';
    this.linkRoute = 'users';

    this.placeholder = 'Utilisateur...';
    this.results = 'utilisateurs trouvés';
    this.found = 'users';
    this.creation = 'Users';

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
        data: { field: 'comm_id', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Nom', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'pers_nom', class: 'text-primary font-weight-bold text-left' }
      },
      {
        title: { caption: 'Prénom', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'pers_prenom', class: 'text-primary font-weight-bold text-left' }
      },
      {
        title: { caption: 'Email', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'pers_mail', class: 'text-info text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
    ];

    super.initialize();
  }

}
