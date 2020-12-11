import { GenreService } from './../services/genre.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres:Genre[] | undefined;
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((g) => {
      this.genres = g;
    });  }

}
