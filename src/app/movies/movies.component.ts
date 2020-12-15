import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  private id:number;
  constructor(private movieservice:MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.id);
    // this.route.queryParams.subscribe(params => {
    //   this.id = params['genreid'];
    // });
    this.id = +this.route.snapshot.paramMap.get('genreid');
    this.movieservice.getMoviesByGenre(this.id).subscribe((m) => {
      this.movies = m;
    });  
    
  }

}
