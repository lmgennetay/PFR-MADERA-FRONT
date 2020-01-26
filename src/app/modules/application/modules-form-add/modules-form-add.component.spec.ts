import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../../services/config/config.service';

import { ModulesFormAddComponent } from './modules-form-add.component';

describe('QuotesComponent', () => {
  let component: ModulesFormAddComponent;
  let fixture: ComponentFixture<ModulesFormAddComponent>;

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
        ModulesFormAddComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
