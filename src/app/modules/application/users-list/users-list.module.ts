import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    UsersListComponent
  ],
  providers: [
  ],
})
export class UsersListModule { }
