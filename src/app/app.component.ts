import { Component } from '@angular/core';
import { SearchService } from './services/SearchService';
import { Forecast } from '../models/forecast.model';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'altran-weather';
  forecasts: Array<Forecast> = [];

  constructor(private searchService: SearchService) {
    // Call the initial state of the cities
    let initialForecast = searchService.updateWeather();
    initialForecast.forEach(promise => {
      promise.then(success => {
        this.forecasts.push(new Forecast(success.cityName, success.timeOfUpdate, success.status, success.temperature, success.weatherDescription));
      }, rejected => {
        this.forecasts.push(new Forecast(rejected.cityName, rejected.timeOfUpdate, rejected.status));
      });
    });
  }
}
