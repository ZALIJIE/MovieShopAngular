import { CastService } from './../../core/services/cast.service';
import { movieDetail } from './../../shared/models/movieDetail';
import { MovieService } from './../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { cast } from 'src/app/shared/models/cast';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetail:movieDetail;
  constructor(private route:ActivatedRoute, private movieService:MovieService, ) { }

  ngOnInit(): void {
    var id = +this.route.snapshot.paramMap.get('movieid');
    this.movieService.getMovieDetails(id).subscribe(
      (m)=>{
        this.movieDetail=m;
      }
    );

  }

}
