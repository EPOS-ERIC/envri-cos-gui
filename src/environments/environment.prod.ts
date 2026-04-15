import { environmentBase } from './environmentBase';

const authRootUrl = decodeURIComponent('__AUTH_ROOT_URL__');

export const environmentProd = {
  ...environmentBase,
  ...{
    production: true,
    matomoEndpoint: 'https://analytics.envri.eu/',
    matomoSiteId: '4',
    authRootUrl: authRootUrl.startsWith('http') ? authRootUrl : 'https://login.staging.envri.eu/auth/realms/envri',
  },
};
