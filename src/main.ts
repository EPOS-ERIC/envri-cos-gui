import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
(window as any).__env = {
  matomoSiteId: environment.matomoSiteId
};


if (environment.production) {
  enableProdMode();
}

void platformBrowserDynamic().bootstrapModule(AppModule);
