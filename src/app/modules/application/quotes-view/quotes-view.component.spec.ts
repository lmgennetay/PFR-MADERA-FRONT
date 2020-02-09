import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../../services/config/config.service';

import { QuotesViewComponent } from './quotes-view.component';

describe('QuotesComponent', () => {
  let component: QuotesViewComponent;
  let fixture: ComponentFixture<QuotesViewComponent>;

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
        QuotesViewComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer', () => {
    expect(component).toBeTruthy();
  });
});
