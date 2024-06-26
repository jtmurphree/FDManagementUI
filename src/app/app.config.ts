import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), NavbarComponent, provideHttpClient(withFetch()), provideAnimationsAsync('noop')]
};
