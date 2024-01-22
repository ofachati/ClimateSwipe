import { Injectable } from '@angular/core';
//import emissionsData from 'src/assets/datasets/owid-co2-data.json';
import { EmissionsData } from '../models/EmissionsData.model';
import { EmissionRegion } from '../models/EmissionRegion.model';
import { EmissionRecord } from '../models/EmissionRecord.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private emissionsDataUrl = 'https://raw.githubusercontent.com/ofachati/testrepo/main/climateData.json'; // Replace with your data URL
  private emissionsData: EmissionsData | null = null;

  constructor(private http: HttpClient) { 
    this.fetchEmissionsData().subscribe(); // Initiate data fetching
  }

  fetchEmissionsData(): Observable<EmissionsData> {
    if (this.emissionsData) {
      return of(this.emissionsData); // Return cached data
    } else {
      return this.http.get<EmissionsData>(this.emissionsDataUrl).pipe(
        tap(data => this.emissionsData = data), // Cache fetched data
        catchError(this.handleError<EmissionsData>('fetchEmissionsData', {} as EmissionsData))
      );
    }
  }


  normalizeData(data: any[]): any[] {
    const maxVal = Math.max(...data.map(d => d.value));
    const minVal = Math.min(...data.map(d => d.value));

    return data.map(d => ({
      name: d.name,
      value: (d.value - minVal) / (maxVal - minVal)
    }));
  }

  getAllCountries(): string[] {
    return Object.keys(this.emissionsData as unknown as EmissionsData);
  }

  getAllYears(): number[] {
    const startYear = 1750;
    const endYear = 2022;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

//line co2 country by population
co2ByCountry(): any[] {
  const selectedCountries = ['World'];
  const emissionsByCountry: any[] = [];

  selectedCountries.forEach(country => {
    const countryData = (this.emissionsData as unknown as EmissionsData)[country];
    if (countryData && countryData.data) {
      const series = countryData.data.map(d => ({
        name: d.population,
        value: d.co2
      }));

      emissionsByCountry.push({
        name: country,
        series: series
      });
    }
  });

  return emissionsByCountry;
}

//bar chart
  getTopEmittingCountries(): any[] {
    const recentYear = this.getMostRecentYear();
    const topEmittingCountries = Object.entries(this.emissionsData as unknown as EmissionsData)
      .map(([country, data]: [string, EmissionRegion]) => {
        const recentData = data.data.find(d => d.year === recentYear);
        return { name: country, value: recentData ? recentData.co2 : 0 };
      })
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    return topEmittingCountries;
  }

  private getMostRecentYear(): number {
    const allYears = Object.values(this.emissionsData as unknown as EmissionsData)
      .flatMap(source => source.data.map(d => d.year));
    return Math.max(...allYears);
  }
//pie chart


getEmissionSourcesForYear(year: number): any[] {
  const emissionSources = [];

  // Assuming 'World' or another global entry holds the data for all sources
  const worldData = (this.emissionsData as unknown as EmissionsData)['World'].data.find(d => d.year === year);

  if (worldData) {
    // Add each source with its corresponding value
    emissionSources.push({ name: 'Ciment', value: worldData.cement_co2 });
    emissionSources.push({ name: 'Charbon', value: worldData.coal_co2 });
    emissionSources.push({ name: 'Flaring', value: worldData.flaring_co2 });
    emissionSources.push({ name: 'Gaz', value: worldData.gas_co2 });
    emissionSources.push({ name: 'Pétrole', value: worldData.oil_co2 });
    emissionSources.push({ name: 'Changement d affectation des terres', value: worldData.land_use_change_co2 });
    emissionSources.push({ name: 'Autre', value: worldData.other_industry_co2 });

    // Add other sources as necessary
  }

  return emissionSources;
}


/// co2- co2 per capita - and temp line chart

getEmissionsOverTime(): any[] {
  // Assuming 'World' contains global CO2 emissions data
  const worldData = (this.emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => ({ name: d.year, value: d.co2 }));
}

getEmissionsPerCapitaOverTime(): any[] {
  // Assuming 'World' contains global CO2 emissions data
  const worldData = (this.emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => ({
    name: d.year,
    value: d.co2_per_capita || 0
  }));
}
getTemperatureAnomaliesOverTime(): any[] {
  const worldData = (this.emissionsData as unknown as EmissionsData)['World'].data;
  return worldData.map(d => {
    const totalAnomaly = d.temperature_change_from_ch4 + d.temperature_change_from_co2 +
                         d.temperature_change_from_ghg + d.temperature_change_from_n2o;

    // Use a ternary operator to handle NaN values
    return !isNaN(totalAnomaly) ? {
      name: d.year,
      value: totalAnomaly
    } : null;
  }).filter(d => d !== null); // Filter out null values
}


getCombinedEmissionsAndTemperatureData(): any[] {
  let emissionsData = this.getEmissionsOverTime();
  let temperatureData = this.getTemperatureAnomaliesOverTime();
  //let emissionsPerCapitaData = this.getEmissionsPerCapitaOverTime();

// Normalize the data
emissionsData = this.normalizeData(emissionsData);
temperatureData = this.normalizeData(temperatureData);
//emissionsPerCapitaData = this.normalizeData(emissionsPerCapitaData);
  return [
    {
      name: 'émissions',
      series: emissionsData
    },
    {
      name: 'Changement de température',
      series: temperatureData
    }
    //,{ name: 'CO2 Emissions per Capita', series: emissionsPerCapitaData}
  ];
}
//bubble chart 

// Method to get data for the bubble chart
getEmissionsIntensityData(): any[] {
  const latestYear = 2018;
  const latestYearData = Object.entries(this.emissionsData as unknown as EmissionsData)
    .map(([country, data]): any => {
      const yearData: any = data.data.find(d => d.year === latestYear);

      if (yearData && this.isValidDataPoint(yearData) && country !== 'World') {
        const gdpPerCapita = yearData.gdp/yearData.population;
        const emissionsIntensity = yearData.co2 / gdpPerCapita;
        return {
          name: country,
          series: [{
            name: latestYear.toString(),
            x: gdpPerCapita,
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
  return dataPoint.gdp != null && dataPoint.co2 != null ;
}

//polar chart 

getEmissionsProfileBySourceForYear(year: number): any[] {
  //const selectedCountries = ['United States', 'France', 'Russia', 'Brazil']; // Example countries
  const selectedCountries = ['United States', 'France', 'Russia', 'Brazil']; // Example countries

  const emissionsProfile: any[] = [];

  selectedCountries.forEach(country => {
    const countryData = (this.emissionsData as unknown as EmissionsData)[country].data.find(d => d.year === year);

    if (countryData) {
      emissionsProfile.push({
        name: country,
        series: [
          { name: 'Ciment', value: countryData.cement_co2 },
          { name: 'Charbon', value: countryData.coal_co2 },
          { name: 'Flaring', value: countryData.flaring_co2 },
          { name: 'Gaz', value: countryData.gas_co2 },
          { name: 'Pétrole', value: countryData.oil_co2 },
          { name: 'Autre', value: countryData.other_industry_co2 },
          { name: 'Changement d affectation des terres', value: countryData.land_use_change_co2 }
        ]
      });
    }
  });

  return emissionsProfile;
}



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}


