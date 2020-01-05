import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersListComponent } from './customers-list.component';
import { CustomersListRoutingModule } from './customers-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    CustomersListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    CustomersListComponent
  ],
  providers: [
  ],
})
export class CustomersListModule { }
