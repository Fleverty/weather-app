import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FiltersComponent} from './filters.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FiltersComponent
  ],
  declarations: [
    FiltersComponent
  ]
})

export class FiltersModule {}
