export const environment = {
  production: false,
  mock_server: true,
  API_URL: 'http://localhost:4200/api',
  auth_config: {
    issuer: 'https://sso-gint-core-keycloak.apps.giss.int.portal.ss/auth/realms/eidasrealm',
    redirectUri: 'http://localhost:4200/home',
    postLogoutRedirectUri: 'http://localhost:4200/login',
    clientId: 'cs-sems-app-client',
    responseType: 'code',
    showDebugInformation: true,
    customQueryParams: {
      nivel: '2',
      idioma: 'es',
      tipo_identificacion: '2'
    },
    kc_idp_hint_internet: 'eidas-saml-internet',
    kc_idp_hint_intranet: 'eidas-saml'
  }
};
