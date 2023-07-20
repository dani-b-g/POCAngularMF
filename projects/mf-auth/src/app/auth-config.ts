import { environment } from '@env';
import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.auth_config.issuer,
  redirectUri: environment.auth_config.redirectUri,
  postLogoutRedirectUri: environment.auth_config.postLogoutRedirectUri,
  clientId: environment.auth_config.clientId,
  responseType: environment.auth_config.responseType,
  showDebugInformation: environment.auth_config.showDebugInformation,
  customQueryParams: environment.auth_config.customQueryParams,
  requireHttps: false, // Permite HTTP sin TLS
  scope:'offline_access'
};
