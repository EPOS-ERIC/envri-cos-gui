import { Organization } from '../data/organization.interface';
import { SearchCriteria } from './searchCriteria.enum';
import { ItemSummary } from 'api/webApi/data/itemSummary.interface';
import { SimpleECV } from 'components/ecvFilter/ecvFilter.component';


export interface SearchApi {

  doSearch(searchCriteriaMap: Map<SearchCriteria, unknown>): Promise<Array<ItemSummary>>;

  getOrganizations(type: string): Promise<Array<Organization> | null>;

  getOrganizationById(organizationId: string): Promise<Organization | null>;

  getECVs(): Promise<Array<SimpleECV> | null>;
}
