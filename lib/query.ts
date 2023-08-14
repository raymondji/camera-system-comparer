import { database } from './database';
import { CameraSystem } from './model';

export type Filters = {
  weatherSealed: boolean;
  dualCardSlots: boolean;
  inBodyImageStabilization: boolean;
  lenses: LensFilters;
};

export type LensFilters = {};

export enum SortOrder {
  priceAscending,
  weightAscending,
}

// TODO: support specifying some existing gear, and make the filters take into account that. e.g. include them in the systems with price set to 0.
//
// query returns a list of camera systems that satisfy the given filters and sorted by the given sortOrder
export function query(filters: Filters, sortOrder: SortOrder): CameraSystem[] {
  return [];
}
