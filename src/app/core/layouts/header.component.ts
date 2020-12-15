import { AuthenticationService } from './../services/authentication.service';
import { GenreService } from './../services/genre.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres:Genre[] | undefined;
  isUserAuthenticated:boolean;
  LogedInUser:User;
  router: any;

  constructor(private genreService:GenreService, private authenService:AuthenticationService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((g) => {
      this.genres = g;
    });  

    this.authenService.isUserAuthenticated.subscribe(
      isLogedIn=>{
        this.isUserAuthenticated=isLogedIn;
      }
    );

    if(this.isUserAuthenticated){
      this.authenService.currentLogedInUser.subscribe(user=>{this.LogedInUser=user;});
    }
  }

  logout(){
    this.authenService.logout;
    this.router.navigate(['/']);
  }

}
