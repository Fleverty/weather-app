import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
import {Country, FiltersData} from '@wtr/interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wtr-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit, OnDestroy {
  public filtersForm: FormGroup;
  public countries: Country[] = ['Israel', 'Cyprus', 'Slovenia', 'Jamaica', 'PuertoRico'];
  private unsubscribe$$: Subject<void> = new Subject<void>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.filtersForm = this.formBuilder.group({
      country: [null],
      sex: [null],
    });
  }

  public ngOnInit(): void {
    this.setFormByQueryParams().subscribe();
    this.setQueryParamsByFormValue().subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }

  private setUrlQueryParams(value: FiltersData): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        country: value.country,
        sex: value.sex
      },
      queryParamsHandling: 'merge',
    });
  }

  private setFormByQueryParams(): Observable<void> {
    return this.activatedRoute.queryParams.pipe(
      filter(data => data.sex || data.country),
      map(data => this.filtersForm.setValue({sex: data.sex, country: data.country}, {emitEvent: false})),
      takeUntil(this.unsubscribe$$)
    );
  }

  private setQueryParamsByFormValue(): Observable<void> {
    return this.filtersForm.valueChanges.pipe(
      map((value: FiltersData) => this.setUrlQueryParams(value)),
      takeUntil(this.unsubscribe$$)
    );
  }
}
