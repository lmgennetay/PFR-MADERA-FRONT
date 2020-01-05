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

import { CustomersListComponent } from './customers-list.component';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;

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
        CustomersListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
