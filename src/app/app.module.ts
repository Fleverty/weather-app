import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CityCardModule, FiltersModule} from '@wtr/components';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FiltersModule,
    CityCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
