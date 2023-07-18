import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsLibService } from '@commons-lib';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '@env';
import { authCodeFlowConfig } from '../auth-config';
import { AuthModule } from "./auth.module";

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [CommonModule, AuthModule  ]
})
export class AuthComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    
  }
  ngOnInit(): void {
    this.oauthService.configure(authCodeFlowConfig)
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();
  }
  
  openInternetGateway(): void {
    this.oauthService.initCodeFlow(undefined, { kc_idp_hint: environment.auth_config.kc_idp_hint_internet });
  }
  openIntranetGateway(): void {
    this.oauthService.initCodeFlow(undefined, { kc_idp_hint: environment.auth_config.kc_idp_hint_intranet });
  }
  logout(): void {
    this.oauthService.logOut();
  }
}