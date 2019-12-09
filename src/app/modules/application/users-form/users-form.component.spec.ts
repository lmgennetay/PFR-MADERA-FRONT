import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ConfigService} from '../../../services/config/config.service';

import { UsersFormComponent } from './users-form.component';
import {HttpClientModule} from '@angular/common/http';

describe('UsersComponent', () => {
  let component: UsersFormComponent;
  let fixture: ComponentFixture<UsersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      ConfigService
    ],
    declarations: [
        UsersFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
