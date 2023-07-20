import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, OAuthService],
      imports: [HttpClientModule, OAuthModule.forRoot()],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
