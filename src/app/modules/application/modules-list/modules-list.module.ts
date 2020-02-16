import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModulesListComponent } from './modules-list.component';
import { ModulesListRoutingModule } from './modules-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    ModulesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModulesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ModulesListComponent
  ],
  providers: [
  ],
})
export class ModulesListModule { }
