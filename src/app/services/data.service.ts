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
  normalizeData(data: any[]): any[] {
    const maxVal = Math.max(...data.map(d => d.value));
    const minVal = Math.min(...data.map(d => d.value));

    return data.map(d => ({
      name: d.name,
      value: (d.value - minVal) / (maxVal - minVal)
    }));
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


/// co2- co2 per capita - and temp line chart

getEmissionsOverTime(): any[] {
  // Assuming 'World' contains global CO2 emissions data
  const worldData = (emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => ({ name: d.year, value: d.co2 }));
}

getEmissionsPerCapitaOverTime(): any[] {
  // Assuming 'World' contains global CO2 emissions data
  const worldData = (emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => ({
    name: d.year,
    value: d.co2_per_capita || 0
  }));
}
getTemperatureAnomaliesOverTime(): any[] {
  const worldData = (emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => {
    const totalAnomaly = d.temperature_change_from_ch4 + d.temperature_change_from_co2 +
                         d.temperature_change_from_ghg + d.temperature_change_from_n2o;

    return {
      name: d.year,
      value: isNaN(totalAnomaly) ? 0 : totalAnomaly // Replace NaN values with 0 or filter them out
    };
  }).filter(d => !isNaN(d.value)); // Optionally, filter out the years with NaN values
}

getCombinedEmissionsAndTemperatureData(): any[] {
  let emissionsData = this.getEmissionsOverTime();
  let temperatureData = this.getTemperatureAnomaliesOverTime();
  let emissionsPerCapitaData = this.getEmissionsPerCapitaOverTime();

// Normalize the data
emissionsData = this.normalizeData(emissionsData);
temperatureData = this.normalizeData(temperatureData);
emissionsPerCapitaData = this.normalizeData(emissionsPerCapitaData);
  return [
    {
      name: 'CO2 Emissions',
      series: emissionsData
    },
    {
      name: 'Temperature Anomaly',
      series: temperatureData
    },
    {
      name: 'CO2 Emissions per Capita',
      series: emissionsPerCapitaData
    }
  ];
}
//bubble chart 

// Method to get data for the bubble chart
getEmissionsIntensityData(): any[] {
  const latestYear = 2018;
  const latestYearData = Object.entries(emissionsData as unknown as EmissionsData)
    .map(([country, data]): any => {
      const yearData: any = data.data.find(d => d.year === latestYear);

      if (yearData && this.isValidDataPoint(yearData) && country !== 'World') {
        const emissionsIntensity = yearData.co2 / yearData.gdp;
        return {
          name: country,
          series: [{
            name: latestYear.toString(),
            x: yearData.gdp,
            y: yearData.co2,
            r: emissionsIntensity
          }]
        };
      }
      return null;
    })
    .filter(entry => entry !== null); // Filter out null entries

  return latestYearData;
}



private isValidDataPoint(dataPoint: any): boolean {
  return dataPoint.gdp != null && dataPoint.co2 != null && dataPoint.co2 / dataPoint.gdp != null ;
}
}


