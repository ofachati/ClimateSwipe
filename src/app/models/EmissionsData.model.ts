import { EmissionRegion } from "./EmissionRegion.model";

export interface EmissionsData {
    [source: string]: EmissionRegion;
  }