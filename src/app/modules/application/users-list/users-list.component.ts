import { Component, Injector } from '@angular/core';

import { PageListComponent } from '../../../components/page-list/page-list.component';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {

    this.endpoint = 'utilisateur/liste/';
    this.link = 'users';
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
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Nom', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'name', class: 'text-primary font-weight-bold text-center' }
      },
      {
        title: { caption: 'Prénom', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'firstName', class: 'text-primary font-weight-bold text-center' }
      },
      {
        title: { caption: 'Type d\'utilisateur', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'typeUtilisateur', class: 'text-primary font-weight-bold text-center' }
      },
      {
        title: { caption: 'Tél', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'phone', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Email', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'email', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
    ];

    super.initialize();
  }

}
