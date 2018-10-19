import {Component} from '@angular/core';
import {SearchService} from './services/SearchService';
import {Forecast} from './models/forecast.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    forecasts: Array<Forecast>;
    searchService: SearchService;

    constructor(private s: SearchService) {
        // Call the initial state of the cities
        this.forecasts = [];
        this.searchService = s;
        this.updateWeatherInfo();
    }

    private updateWeatherInfo() {
        const initialForecast = this.searchService.updateWeather();
        initialForecast.forEach(promise => {
            promise.then(success => {
                this.forecasts.push(success);
            }, rejected => {
                this.forecasts.push(rejected);
            });
        });
    }
}
