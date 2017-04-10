import { Injectable } from '@angular/core';
import { AuthServerProviderService } from './auth-server-provider.service';


@Injectable()
export class LoginService {

    constructor (
       
        private authServerProvider: AuthServerProviderService
    ) {}

    login (credentials, callback?) {
        let cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(data => {
                 return cb();
            }, err => {
                this.logout();
                reject(err);
                return cb(err);
            });
        });
    }
    loginWithToken(jwt, rememberMe) {
      //  return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout () {
        // this.authServerProvider.logout().subscribe();
          }
}
