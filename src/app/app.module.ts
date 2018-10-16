import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { SearchService } from './services/SearchService';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CityForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
