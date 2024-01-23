import { Component, OnInit } from '@angular/core';
import { EmissionRecord } from 'src/app/models/EmissionRecord.model';
import { EmissionsData } from 'src/app/models/EmissionsData.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrl: './analytic.component.scss'
})


export class AnalyticComponent implements OnInit {
  isLoading = true;
 // view: [number, number] = [700, 300]; // Chart dimensions
 countryEmmisionByYear!: any[]; // This will hold the formatted data for the chart
 topEmittingCountries!: any[];
 advancedPiechartData!: any[];
 lineChartCo2TempData!: any[];
 bubbleChartData!: any[];
 emissionsProfileData!: any[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchEmissionsData().subscribe(data => {
      console.log('Fetched Emissions Data:', data);

    //line co2 by country
      this.countryEmmisionByYear=this.dataService.co2ByCountry();
    //bar
    this.topEmittingCountries = this.dataService.getTopEmittingCountries();
    //pie
    const recentYear = 2022; // Replace with logic to determine the recent year
    this.advancedPiechartData = this.dataService.getEmissionSourcesForYear(recentYear);
    //line co2 temp
    this.lineChartCo2TempData = this.dataService.getCombinedEmissionsAndTemperatureData();
//buube chart
this.bubbleChartData = this.dataService.getEmissionsIntensityData();
//polar chart
this.emissionsProfileData = this.dataService.getEmissionsProfileBySourceForYear(2022);


this.isLoading = false; // Set loading to false once data is fetched
}, error => {
  console.error('Error fetching data:', error);
  this.isLoading = false; // Also set loading to false in case of error
});
    
  }


}