import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../../services/config/config.service';

import { ModulesFormCaracComponent } from './modules-form-carac.component';

describe('QuotesComponent', () => {
  let component: ModulesFormCaracComponent;
  let fixture: ComponentFixture<ModulesFormCaracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        ConfigService,
      ],
      declarations: [
        ModulesFormCaracComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesFormCaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
