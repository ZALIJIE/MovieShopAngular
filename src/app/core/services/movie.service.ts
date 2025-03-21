import { movieDetail } from './../../shared/models/movieDetail';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private apiService: ApiService) {}
  
  getTopRevenueMovies(): Observable<Movie[]> {
    return this.apiService.getAll('movies/toprevenue');
  }

  getMoviesByGenre(id:number):Observable<Movie[]>{
    return this.apiService.getAll('movies/genres/'+id);
  }

  getMovieDetails(id:number):Observable<movieDetail>{
    return this.apiService.getOne('movies/'+id);
  }
}