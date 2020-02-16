import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigrationMenuComponent } from './configration-menu.component';

describe('GestionClientMenuComponent', () => {
  let component: ConfigrationMenuComponent;
  let fixture: ComponentFixture<ConfigrationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigrationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigrationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
