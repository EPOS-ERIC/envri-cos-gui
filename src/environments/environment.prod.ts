import { environmentBase } from './environmentBase';

export const environmentProd = {
  ...environmentBase,
  ...{
    production: true,
    /* matomoEndpoint: 'https://analytics.envri.eu/', */ // keeping it as a reference, not read by the script initializing matomo
    matomoSiteId: '4',
    matomoTrackEvent: true,
    fairAssessmentUrl: 'https://www.ics-c.epos-eu.org/epos-fair-assessment/',
    modules: {
      data: true, // turns the data section on and off
      analysis: true, // turns the analysis section on and off
      registry: true, // turns the registry section on and off
      software: true, // turns the software section on and off
    },
  },
};
