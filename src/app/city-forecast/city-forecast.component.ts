import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../models/forecast.model';

@Component({
  selector: 'city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  @Input() forecast: Object;
  constructor() {

  }

  ngOnInit() {
  }

}
