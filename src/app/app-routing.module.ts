import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: 'meteo',
    component: MeteoComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movieDetail/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
