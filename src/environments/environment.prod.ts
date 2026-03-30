import { environmentBase } from './environmentBase';

export const environmentProd = {
  ...environmentBase,
  ...{
    production: true,
    matomoEndpoint: 'https://analytics.envri.eu/',
    matomoSiteId: '4',
  },
};
