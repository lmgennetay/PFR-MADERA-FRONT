import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LogoutService } from './logout.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be createdd', () => {
    const service: LogoutService = TestBed.get(LogoutService);
    expect(service).toBeTruthy();
  });
});
