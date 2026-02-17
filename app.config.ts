import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental'
import { withDevtools } from '@tanstack/angular-query-experimental/devtools/production'

import { routes } from './src/app/app.routes';
import { DevtoolsOptionsManager } from './src/app/modules/issues/services/devtoolsOptionsManager.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection(),
    provideTanStackQuery(
      new QueryClient(),
      withDevtools(
        (devToolsOptionsManager: DevtoolsOptionsManager) => ({
          loadDevtools: devToolsOptionsManager.loadDevtools(),
        }),
        {
          deps: [DevtoolsOptionsManager],
        }
      )
  )
  ]
};
