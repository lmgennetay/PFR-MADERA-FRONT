import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientMenuComponent } from './gestion-client-menu.component';

describe('GestionClientMenuComponent', () => {
  let component: GestionClientMenuComponent;
  let fixture: ComponentFixture<GestionClientMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClientMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
