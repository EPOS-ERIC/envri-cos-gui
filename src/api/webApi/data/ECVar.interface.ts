import { Identifiable } from './identifiable.interface';

export interface ECVar extends Identifiable {
  getUrl(): string;
  getCountry(): string;
  getLogoUrl(): string | null;
}

