import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@wtr/environment';
import {Observable} from 'rxjs';
import {AreaWeatherData} from '@wtr/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly rootUrl = environment.API_URL;
  private readonly appId = environment.appId;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  public getWeatherInArea(zoneParams: number[], units: string = 'metric'): Observable<AreaWeatherData> {
    const httpParams: HttpParams = new HttpParams();
    httpParams.set('bbox', zoneParams.join(','));
    httpParams.set('appid', this.appId);
    httpParams.set('units', units);
    return this.httpClient.get<AreaWeatherData>(
      `${this.rootUrl}/data/2.5/box/city?bbox=${zoneParams.join(',')}&appid=${this.appId}&units=${units}`
    );

  }
}
