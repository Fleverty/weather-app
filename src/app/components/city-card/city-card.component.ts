import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {CityWeatherData} from '@wtr/interfaces';

@Component({
  selector: 'wtr-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent {
  @Input() city?: CityWeatherData;
  @Input() numberInOrder = 1;
}
