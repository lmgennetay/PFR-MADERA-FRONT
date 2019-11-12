import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDroiteComponent } from './menu-droite.component';

describe('MenuDroiteComponent', () => {
  let component: MenuDroiteComponent;
  let fixture: ComponentFixture<MenuDroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDroiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
