import {CityWeatherData} from './city-weather.interface';

export interface AreaWeatherData {
  calctime: number;
  cnt: number;
  cod: number;
  list: CityWeatherData[];
}
