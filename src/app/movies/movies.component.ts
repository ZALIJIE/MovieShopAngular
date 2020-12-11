import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  constructor(private movieservice:MovieService) { }

  ngOnInit(): void {
    this.movieservice.getMoviesByGenre(1).subscribe((m) => {
      this.movies = m;
    });  
  }

}
