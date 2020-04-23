import { Component, OnInit } from '@angular/core';

import { MovieService } from "src/app/movie.service";
import { GenreType } from 'src/app/models/genre.model';
import { genreType } from 'src/app/models/genre';
import { ALL_GENRES } from 'src/app/mock/mock-genres';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent implements OnInit {
  genres: GenreType[] = ALL_GENRES;
  tempGenre: GenreType;
  movies:Movie[];
  constructor(
    private movieService:MovieService,
  ) { }

  ngOnInit(): void {
  }

  getMoviesByGenre(): void {
    this.movieService.getMoviesByGenre(this.tempGenre)
    .subscribe(movies => this.movies = movies)
  }

  changeMovie(genre:GenreType): void {
    this.tempGenre = genre;
    this.getMoviesByGenre();
  }

}
