import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {CityWeatherData} from '@wtr/interfaces';
import {BestCityService} from '@wtr/services';
import {filter, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {getBBoxByCountryName} from '@wtr/helpers';

@Component({
  selector: 'wtr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public bestCities$: Observable<CityWeatherData[]>;

  constructor(
    private readonly bestCityService: BestCityService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.bestCities$ = this.activatedRoute.queryParams.pipe(
      filter(data => data.sex && data.country),
      switchMap((data: Params) => {
        const bbox: number[] = getBBoxByCountryName(data.country);
        return this.bestCityService.getCitiesSortedByTempHumidity(bbox, data.sex);
      })
    );
  }
}
