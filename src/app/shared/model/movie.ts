export class Movie {
  id: number;
  title: string;
  year: number;
  description: string;

  /**
   * Constructor
   * 
   * @param movie
   */
  constructor(movie?){
    movie = movie || {};
    this.id = movie.id || '';
    this.title = movie.title || '';
    this.year = movie.year || '';
    this.description = movie.description || '';
  }

  // movies: Array<Movie> = [
  //     new Movie({id: 1, title: 'Rambo', year: 1989, description: 'Cest pas ma gueerre'}),
  //     new Movie({id: 2, title: 'Interstellar', year: 2018, description: 'New hello world'}),
  //   ];
}
