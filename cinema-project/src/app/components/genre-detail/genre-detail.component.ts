import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { GenreType } from 'src/app/models/genre.model';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.sass']
})
export class GenreDetailComponent implements OnInit {
  @Input() movies:Movie[]
  @Input() genres: GenreType[]
  constructor() { }

  ngOnInit(): void {
   
  }

}
