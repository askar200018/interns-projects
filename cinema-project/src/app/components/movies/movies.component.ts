import { Component, OnInit } from '@angular/core';

import { MovieService } from "src/app/movie.service";
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  searchText;

  constructor(
    private movieService:MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovies()
    this.getMoviesByGenre()
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
  getMoviesByGenre():void {
    let temp:Movie[] = [];
    this.movieService.getMoviesByGenre('comedy')
      .subscribe(movies => console.log(movies))
  }
}
