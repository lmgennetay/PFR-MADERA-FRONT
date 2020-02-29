import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CaracteristiquesListComponent } from './caracteristiques-list.component';
import { CaracteristiquesListRoutingModule } from './caracteristiques-list-routing.module';

import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';

@NgModule({
  declarations: [
    CaracteristiquesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CaracteristiquesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    CaracteristiquesListComponent
  ],
  providers: [
  ],
})
export class CaracteristiquesListModule { }
