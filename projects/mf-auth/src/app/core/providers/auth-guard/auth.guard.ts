import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.oauthService.hasValidIdToken()) {
      return Promise.resolve(true);
    }

    return this.oauthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        return this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken();
      })
      .then((valid) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            valid = this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken();
            if (!valid) {
              this.router.navigate(['/login']);
            }
            resolve(valid);
          }, 1000);
        });
      });
  }
}
