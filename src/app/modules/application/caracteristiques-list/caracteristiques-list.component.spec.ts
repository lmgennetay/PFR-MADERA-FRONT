import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchBarModule } from '../../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../../components/search-result/search-result.module';
import { SearchResultRoutingModule } from 'src/app/components/search-result/search-result-routing.module';
import { GridModule } from '../../../components/grid/grid.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { ConfigService } from '../../../services/config/config.service';

import { CaracteristiquesListComponent } from './caracteristiques-list.component';

describe('ModulesListComponent', () => {
  let component: CaracteristiquesListComponent;
  let fixture: ComponentFixture<CaracteristiquesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        SearchBarModule,
        SearchResultModule,
        SearchResultRoutingModule,
        GridModule,
        PaginationModule,
      ],
      providers: [
        ConfigService,
      ],
      declarations: [
        CaracteristiquesListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
