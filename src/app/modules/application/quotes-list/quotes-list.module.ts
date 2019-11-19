import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotesListComponent } from './quotes-list.component';
import { QuotesListRoutingModule } from './quotes-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    QuotesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuotesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    QuotesListComponent
  ],
  providers: [
  ],
})
export class QuotesListModule { }
