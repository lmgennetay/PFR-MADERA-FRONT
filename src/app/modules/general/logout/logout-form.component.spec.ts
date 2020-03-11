import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ConfigService} from '../../../services/config/config.service';

import { LogoutFormComponent } from './logout-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LogoutFormComponent;
  let fixture: ComponentFixture<LogoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ConfigService
    ],
    declarations: [
        LogoutFormComponent
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
