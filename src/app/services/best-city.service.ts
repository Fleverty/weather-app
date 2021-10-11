import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {CityWeatherData, Sex} from '@wtr/interfaces';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BestCityService {

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  public getCitiesSortedByTempHumidity(bbox: number[], sex: Sex): Observable<CityWeatherData[]> {
    const pleasureTemperature: number = sex === 'MALE' ? 21 : 22;
    return this.apiService.getWeatherInArea(bbox).pipe(
      map(data => {
        const citiesWeather: CityWeatherData[] = data.list.sort(
          (a, b) => {
            const firstComparison: number = Math.abs(a.main.temp - pleasureTemperature) + Math.abs(a.main.humidity - 50);
            const secondComparison: number = Math.abs(b.main.temp - pleasureTemperature) + Math.abs(b.main.humidity - 50);
            return firstComparison - secondComparison;
          }
        );
        citiesWeather.length = 3;
        return citiesWeather;
      })
    );
  }
}
