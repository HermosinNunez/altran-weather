export class Forecast {
    readonly iconURL = 'http://openweathermap.org/img/w/'
    cityName: string;
    temperature?: number;
    timeOfUpdate: Date;
    status: string;
    weatherDescription?: string;
    icon?: string;

    constructor(cityName: string, timeOfUpdate: Date, status: string, temperature?: number, weatherDescription?: string, icon ?: string) {
        this.cityName = cityName;
        // Convert Kelvin into Celsius degrees
        this.temperature = temperature - 273.15;
        this.timeOfUpdate = timeOfUpdate;
        this.weatherDescription = weatherDescription;
        this.icon = this.iconURL + icon + '.png';
    }
}