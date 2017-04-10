import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { NgUploaderModule } from 'ngx-uploader';
import { DemoComponent } from './demo/demo.component';

import {WebService} from "./web.service";
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes'; 
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthServerProviderService } from './auth-server-provider.service';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
 
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent ,
    
    LoginComponent,
    FilterPipe,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    JsonpModule,
    Ng2Webstorage,
    NgUploaderModule ,
  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebService,LoginService, AuthServerProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
