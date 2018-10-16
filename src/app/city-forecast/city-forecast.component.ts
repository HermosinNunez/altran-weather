import { Component, OnInit } from '@angular/core';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {

  forecast: Forecast;

  constructor() { }

  ngOnInit() {
  }

}
