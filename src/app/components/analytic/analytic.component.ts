import { Component, OnInit } from '@angular/core';
import { EmissionRecord } from 'src/app/models/EmissionRecord.model';
import { EmissionsData } from 'src/app/models/EmissionsData.model';
import { DataService } from 'src/app/services/data.service';
import * as Data from 'src/assets/datasets/owid-co2-data.json';


@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrl: './analytic.component.scss'
})


export class AnalyticComponent implements OnInit {
  multi!: any[]; // This will hold the formatted data for the chart
 // view: [number, number] = [700, 300]; // Chart dimensions

 topEmittingCountries!: any[];
 advancedPiechartData!: any[];
 lineChartCo2TempData!: any[];
 bubbleChartData!: any[];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.formatData();
    //bar
    this.topEmittingCountries = this.dataService.getTopEmittingCountries();
    //pie
    const recentYear = 2022; // Replace with logic to determine the recent year
    this.advancedPiechartData = this.dataService.getEmissionSourcesForYear(recentYear);
    //line co2 temp
    this.lineChartCo2TempData = this.dataService.getCombinedEmissionsAndTemperatureData();
//buube chart
this.bubbleChartData = this.dataService.getEmissionsIntensityData();
console.log(this.bubbleChartData);
  }

  formatData(): void {
    // Cast the imported data to the appropriate type
    const data: EmissionsData = Data as unknown as EmissionsData;

    this.multi = ['World','United States','Africa'].map(country => {
      return {
        name: country,
        series: data[country].data.map((entry: EmissionRecord) => {
          return {
            name: entry.year.toString(),
            value: entry.co2
          };
        })
      };
    });
  }
}