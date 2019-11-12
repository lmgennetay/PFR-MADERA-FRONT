import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from './components/header/header.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HeaderModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Devrait créer l\'app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`devrait avoir le titre 'madera-front'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('madera-front');
  // });
  //
  // it('Devrait afficher le titre', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('l\'application madera-front en active!');
  // });
});
