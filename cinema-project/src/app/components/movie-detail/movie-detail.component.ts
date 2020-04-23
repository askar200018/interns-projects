import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from "src/app/movie.service";
import { Movie } from 'src/app/models/movie.model';
import { async } from '@angular/core/testing';
import { GenreType } from 'src/app/models/genre.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<Movie>;
  moviesGenre:Movie[];

  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMovieById();
    this.getMovieByGenre();
  }

  getMovieById():void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.movieService.getMovieById(+params.get('id')))
    );
  }

  getMovieByGenre(): void {
    this.movie$.subscribe(movie => this.getMoviesByGenre(movie.genres));
    // this.movieService.getMoviesByGenre(this.tempGenre)
    // .subscribe(movies => this.movieGenre = movies)
  }
  getMoviesByGenre(genres:GenreType[]):void {
    let moviesTemp:Movie[] = [];
    let i = 0;
    genres.forEach(genre => {
      this.movieService.getMoviesByGenre(genre)
      .subscribe((movies) => {
        moviesTemp = moviesTemp.concat(movies)
        i++;
        if(i === genres.length) {
          this.moviesGenre = this.getUniqueMovies(moviesTemp);
          console.log(this.moviesGenre)
        }
      })
      })
    // console.log(moviesTemp)
  } 

  getUniqueMovies(movies:Movie[]) {
    return movies.filter(
      (movie, i, arr) => arr.findIndex(m => m.id === movie.id) === i
    )
  }

  goBack(): void {
    this.location.back();
  }

}
