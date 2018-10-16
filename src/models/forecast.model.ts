export class Forecast {
    cityName: string;
    temperature?: number;
    timeOfUpdate: Date;
    status: string;
    weatherDescription?: string;

    constructor(cityName: string, timeOfUpdate: Date, status: string, temperature?: number, weatherDescription?: string) {
        this.cityName = cityName;
        this.temperature = temperature;
        this.timeOfUpdate = timeOfUpdate;
        this.weatherDescription = weatherDescription;
    }
}