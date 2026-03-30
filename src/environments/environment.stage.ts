import { environmentBase } from './environmentBase';

export const environmentStage = {
  ...environmentBase,
  ...{
    matomoEndpoint: 'https://analytics.envri.eu/',
    matomoSiteId: '5',
  },
};
