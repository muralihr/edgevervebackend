import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
  
import 'rxjs/Rx';
import { Observable } from 'rxjs';



@Injectable()
export class WebService {

constructor(private http:Http) {

}

 public makeFileRequest(files:File[]):Observable<any> {
   return Observable.create(observer => {
       let formData:FormData = new FormData(),
           xhr:XMLHttpRequest = new XMLHttpRequest();

       for (let i = 0; i < files.length; i++) {
           formData.append("uploads[]", files[i], files[i].name);
       }

       xhr.onreadystatechange = () => {
           if (xhr.readyState === 4) {
               if (xhr.status === 200) {
                   observer.next(JSON.parse(xhr.response));
                   observer.complete();
               } else {
                   observer.error(xhr.response);
               }
           }
       };

       xhr.open('POST', "http://localhost:8080/api/upload/alumni-photos", true);
       xhr.send(formData);
   });
}
}