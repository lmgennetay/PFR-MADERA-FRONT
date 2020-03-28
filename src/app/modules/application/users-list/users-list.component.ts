import { Component, Injector } from '@angular/core';
import { PageListComponent } from '../../../components/page-list/page-list.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends PageListComponent {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  initialize() {
    if ( localStorage.comm_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    } else {
      this.endpoint = 'commercials';
      this.link = 'user';
      this.linkRoute = 'commercials';

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
          title: {caption: 'N°', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'N°', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Id', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'id', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          title: {caption: 'Nom', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'pers_nom', class: 'text-info tdTableBorder font-weight-bold text-left'}
        },
        {
          title: {caption: 'Prénom', class: 'text-info thGreen font-weight-bold text-left'},
          data: {field: 'pers_prenom', class: 'text-info tdTableBorder font-weight-bold text-left'}
        },
        {
          title: {caption: 'Email', class: 'text-info thGreen font-weight-bold text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'},
          data: {field: 'pers_mail', class: 'text-info tdTableBorder text-left d-none d-md-table-cell d-lg-table-cell d-xl-table-cell'}
        },
        {
          type: 'delete',
          endPoint: 'commercial',
          source: 'commercials',
          title: { caption: 'Action', class: 'text-info thGreen font-weight-bold text-left' },
          data: { field: 'id', class: 'text-info tdTableBorder font-weight-bold text-left' }
        }
      ];

      super.initialize();
    }
  }

  backClicked() {
    this.location.back();
  }

}
