import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SearchService {
    readonly apiUrl: string = "https://api.openweathermap.org/data/2.5/weather";
    readonly apiKey: string = "f91a52daf8a75a6fba9ab2c446e297a1";
    readonly CITIES_IDS = {
        santiago: 3871336,
        buenosAires: 3435910,
        lima: 3936456,
        saoPaulo: 3448439
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
                        let successObject = {
                            cityName: city,
                            status: 'success',
                            timeOfUpdate: timeOfUpdate,
                            temperature: success.main.temp,
                            weatherDescription: success.weather[0].description
                        };

                        return successObject;
                    },
                    error => {
                        let errorObject = {
                            city: city,
                            status: 'error'
                        }

                        return errorObject;
                    }
                );
            this.promises.push(promise);
        });

        return this.promises;
    }
}