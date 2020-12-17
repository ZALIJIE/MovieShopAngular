import { cast } from './../../shared/models/cast';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private apiService:ApiService) { }

  getCastsByMovieId(id:number):Observable<cast[]>{
    return this.apiService.getAll('/movie'+id);
  }
}
