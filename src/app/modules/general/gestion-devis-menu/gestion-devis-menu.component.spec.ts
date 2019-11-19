import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDevisMenuComponent } from './gestion-devis-menu.component';

describe('GestionDevisMenuComponent', () => {
  let component: GestionDevisMenuComponent;
  let fixture: ComponentFixture<GestionDevisMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDevisMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDevisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
