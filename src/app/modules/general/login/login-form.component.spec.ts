import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ConfigService} from '../../../services/config/config.service';

import { LoginFormComponent } from './login-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ConfigService
    ],
    declarations: [
        LoginFormComponent
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
