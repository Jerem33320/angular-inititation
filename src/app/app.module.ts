import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    NavComponent,
    MeteoComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
