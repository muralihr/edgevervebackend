
import {Component, NgZone} from "@angular/core";
import {WebService} from "../web.service";
import { FileUploader } from 'ng2-file-upload'; 
import { OnInit} from '@angular/core';

@Component({
 templateUrl:"./demo.component.html"
})

 export class DemoComponent{
  
 
  public uploader:FileUploader = new FileUploader({url:'http://localhost:8080//api/upload/alumni-photos'});
  public someValue2 ='hsh';
  
  //
   name: string;
   location: string;

  constructor() {
    this.name = 'T105676';
    this.location = 'new york';
  }
  
  //
  ngOnInit() {
 this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
   form.append('username', this.name);
    form.append('location', this.location); 
 };
}


 }