import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8180',
  realm: 'company portal',
  clientId: 'company-portal-app'
});

export default keycloak;