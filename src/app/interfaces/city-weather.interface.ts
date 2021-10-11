export interface CityWeatherData {
  clouds: CloudData;
  coord: CoordinateData;
  dt: number;
  id: number;
  main: MainCharacteristicData;
  name: string;
  rain: boolean;
  snow: boolean;
  visibility: number;
  weather: WeatherData[];
  wind: WindInterface;
}

export interface CloudData {
  today: number;
}

export interface CoordinateData {
  Lat: number;
  Lon: number;
}

export interface MainCharacteristicData {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherData {
  description: string;
  icon: string;
  id: number;
  main: number;
}

export interface WindInterface {
  deg: number;
  speed: number;
}
