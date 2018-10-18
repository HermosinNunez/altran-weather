import { Component } from '@angular/core';
import { SearchService } from './services/SearchService';
import { Forecast } from './models/forecast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altran-weather';
  forecasts: Array<Forecast> = [];

  constructor(private searchService: SearchService) {
    // Call the initial state of the cities
    let initialForecast = searchService.updateWeather();
    initialForecast.forEach(promise => {
      promise.then(success => {
        this.forecasts.push(success);
      }, rejected => {
        this.forecasts.push(rejected);
      });
    });
  }
}
