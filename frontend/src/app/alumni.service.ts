import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AlumniUserProfile }           from './alumni/alumniuserprofile';
import {Observable} from 'rxjs/Rx';
import {LocalStorageService, LocalStorage} from 'ng2-webstorage';
import 'rxjs/add/operator/map'


@Injectable()
export class AlumniService {
  apikey: string;
  private mapUrl = 'http://196.12.53.138:8086/api/alumni'; 
  private mapUrl2 = 'http://196.12.53.138:8086/api/alumni/';
  private mapUrl3 = 'http://196.12.53.138:8086/api/alumni-photos_alumni_id/';

  
  constructor(private _jsonp: Jsonp, public http: Http) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    console.log('AlumniService service is ready');
  }
  getPopular() : Observable<AlumniUserProfile[]>{
         // ...using get request

      let authToken = localStorage.getItem('auth_token');
      let headers = new Headers({ 'Accept': 'application/json' });
      console.log('token' + authToken );
      headers.append('Authorization', 'Bearer  '+authToken);
      let options = new RequestOptions({ headers: headers });

         return this.http.get(this.mapUrl,options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }


    getAlumni(id: string) {

      
      let authToken = localStorage.getItem('auth_token');
      let headers = new Headers({ 'Accept': 'application/json' });
      console.log('token' + authToken );
      headers.append('Authorization', 'Bearer  '+authToken);

      
      let options = new RequestOptions({ headers: headers });


         return this.http.get(this.mapUrl2+id, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    
  }
  //
  getAlumniPhotoLinks(id: string) {

      
      let authToken = localStorage.getItem('auth_token');
      let headers = new Headers({ 'Accept': 'application/json' });
      console.log('token' + authToken );
      headers.append('Authorization', 'Bearer  '+authToken);

      
      let options = new RequestOptions({ headers: headers });


         return this.http.get(this.mapUrl3+id, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    
  }
  
}
