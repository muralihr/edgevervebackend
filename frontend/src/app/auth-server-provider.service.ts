import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import {EventEmitter} from '@angular/core';
@Injectable()
export class AuthServerProviderService {

 navchange: EventEmitter<string> = new EventEmitter();

  constructor(
 private http: Http,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService


  ) { }


emitNavChangeEvent(name) {
    this.navchange.emit(name);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }

    getToken () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }


    login (credentials): Observable<any> {

        let data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };

        let data2 = new URLSearchParams();
        data2.append('username',  credentials.username );
        data2.append('password', credentials.password);
        data2.append('rememberMe', credentials.rememberMe);
  

        console.log("authenticat9ing");
        return this.http.post('http://196.12.53.138:8084/api/authenticatemobile', data2).map(authenticateSuccess.bind(this));

        function authenticateSuccess (resp) {
            
            this.emitNavChangeEvent( credentials.username);      

            let user = resp.json();
            console.log("authenticateSuccess"+ resp.json() );
            let jsonObj =  resp.json() ;
            var t = jsonObj.id_token;
            console.log("authenticateSuccesstt"+ t);
            console.log("authenticateSuccess"+ resp._body.id_token);
              localStorage.setItem('auth_token', t);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                //  
                }     
            
          //  let bearerToken = resp.headers.get('Authorization');
         //   console.log("bearerToken"+bearerToken);
           // if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {

                
              //  let jwt = bearerToken.slice(7, bearerToken.length);
                //console.log("jwt"+resp.id_token);
              //  this.storeAuthenticationToken(resp.id_token, credentials.rememberMe);
              //  return resp.id_token;
         //   }
        }
    }
}
