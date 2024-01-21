import { Injectable } from '@angular/core';
import emissionsData from 'src/assets/datasets/owid-co2-data.json';
import { EmissionsData } from '../models/EmissionsData.model';
import { EmissionRegion } from '../models/EmissionRegion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 

  }
//bar chart
  getTopEmittingCountries(): any[] {
    const recentYear = this.getMostRecentYear();
    const topEmittingCountries = Object.entries(emissionsData as unknown as EmissionsData)
      .map(([country, data]: [string, EmissionRegion]) => {
        const recentData = data.data.find(d => d.year === recentYear);
        return { name: country, value: recentData ? recentData.co2 : 0 };
      })
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    return topEmittingCountries;
  }

  private getMostRecentYear(): number {
    const allYears = Object.values(emissionsData as unknown as EmissionsData)
      .flatMap(source => source.data.map(d => d.year));
    return Math.max(...allYears);
  }
//pie chart


getEmissionSourcesForYear(year: number): any[] {
  const emissionSources = [];

  // Assuming 'World' or another global entry holds the data for all sources
  const worldData = (emissionsData as unknown as EmissionsData)['World'].data.find(d => d.year === year);

  if (worldData) {
    // Add each source with its corresponding value
    emissionSources.push({ name: 'Cement', value: worldData.cement_co2 });
    emissionSources.push({ name: 'Coal', value: worldData.coal_co2 });
    emissionSources.push({ name: 'Flaring', value: worldData.flaring_co2 });
    emissionSources.push({ name: 'Gas', value: worldData.gas_co2 });
    emissionSources.push({ name: 'Oil', value: worldData.oil_co2 });
    // Add other sources as necessary
  }

  return emissionSources;
}

}
