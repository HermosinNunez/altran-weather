import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';

@Injectable()
export class SearchService {
    readonly apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    readonly apiKey: string = 'f91a52daf8a75a6fba9ab2c446e297a1';
    readonly STATUS_SUCCESS = 'success';
    readonly STATUS_REJECTED = 'rejected';
    readonly CITIES_IDS = {
        "Santiago": 3871336,
        "Buenos Aires": 3435910,
        "Lima": 3936456,
        "Sao Paulo": 3448439
    }
    promises: Array<Promise<any>>;
    loading: boolean;

    constructor(private http: HttpClient) {
        this.promises = [];
        this.loading = false;
    }

    updateWeather() {
        Object.keys(this.CITIES_IDS).forEach(city => {
            let timeOfUpdate: Date = new Date();
            let fullUrl = `${this.apiUrl}?id=${this.CITIES_IDS[city]}&appid=${this.apiKey}`;
            let promise = this.http.get(fullUrl).toPromise()
                .then(
                    success => {
                        return this.parseToForecast(timeOfUpdate, city, success);
                    },
                    error => {
                        return this.parseToForecast(timeOfUpdate, city);
                    }
                );
            this.promises.push(promise);
        });

        return this.promises;
    }

    parseToForecast(timeOfUpdate: Date, cityName: string, result?: any) {
        let parsedResult = result ?
            new Forecast(cityName, timeOfUpdate, this.STATUS_SUCCESS, result.main.temp, result.weather[0].description, result.weather[0].icon) :
            new Forecast(cityName, timeOfUpdate, this.STATUS_REJECTED);
        
        return parsedResult;
    }
}