export const environment = {
  production: false,
  mock_server: false,
  API_URL: 'http://course-openapi.apps.giss.int.portal.ss',
  auth_config: {
    issuer: 'https://sso-gint-core-keycloak.apps.giss.int.portal.ss/auth/realms/pgisrealm',
    redirectUri: 'http://course-spa-front.apps.giss.int.portal.ss/home',
    postLogoutRedirectUri: 'http://course-spa-front.apps.giss.int.portal.ss/login',
    clientId: 'cs-sems-app-client',
    responseType: 'code',
    showDebugInformation: true,
    customQueryParams: {
      nivel: '2',
      idioma: 'es',
      tipo_identificacion: '2'
    },
    kc_idp_hint_internet: 'pgis-internet',
    kc_idp_hint_intranet: 'pgis-intranet'
  }
};
