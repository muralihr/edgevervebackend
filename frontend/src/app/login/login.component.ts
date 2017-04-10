import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    credentials: any;

private loggedIn = false;

  constructor( private loginService: LoginService, private router: Router) { 
      this.credentials = {};
      this.rememberMe = true;
    }

  ngOnInit() {

  }


    cancel () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
     }
  logout() {
    
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
    }

     login (credentials) {
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(() => {
            this.authenticationError = false;
            this.loggedIn = true;
            console.log("this.loggedIn = true;");
            
 
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
         }).catch(() => {
            this.authenticationError = true;
         //   this.loggedIn = false;
            console.log("authenticationError this.loggedIn = false;");
        });
    } 
}
