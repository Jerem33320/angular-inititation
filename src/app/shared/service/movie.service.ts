import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Array<Movie> = [
    new Movie({id: 1, title: 'Rambo', year: 1989, description: 'Cest pas ma gueerre'}),
    new Movie({id: 2, title: 'Interstellar', year: 2018, description: 'New hello world'})
  ]
  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    // return this.movies[id-1];
    const movie = this.movies.filter(movie => movie.id == id);
    return movie[0];
  }
}
