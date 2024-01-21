import { EmissionRecord } from "./EmissionRecord.model";

export interface EmissionRegion {
    iso_code: string;
    data: EmissionRecord[];
  }