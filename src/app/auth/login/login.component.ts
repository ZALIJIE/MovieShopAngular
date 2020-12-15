import { Login } from './../../shared/models/login';
import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Angular View (Login) will send the object info to Angular (Login) Component
//ANgular Component will send that object to Angular Service (Auth Service)
//Auth Service will send to Angular API Service, that will call the actual POST REST API (Account/login method)
//when dealing with forms in Angular has 2 approaches
//1. Template-driven forms - when your forms are small and not complex validation logic , Login View
//2. Reactive Forms - when you have big forms or you want complex logic, Creating a Movie, Sign-up//
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:Login={
    email:'',
    password:'',
  }


  //for showing error msg
  invalidLogin:boolean;
  returnUrl:string;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => (this.returnUrl = params.returnUrl || '/')
    );
    this.router.navigate([this.returnUrl]);
  }
  
  login() {
    this.authService.login(this.userLogin).subscribe(
      (response) => {
        if (response) {
        } else {
          this.invalidLogin = true;
        }
      },
      (err: any) => {
        this.invalidLogin = true;
      }
    );
  }
  

}


