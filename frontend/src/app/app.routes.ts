import { Routes } from '@angular/router';
 
  

import { LoginComponent } from './login/login.component';
 
import { DemoComponent } from './demo/demo.component';





export const appRoutes: Routes = [
    
    
    //AlumniComponent
    
    {path: 'upload', component: DemoComponent},
        
    
    
    {path: 'login', component: LoginComponent}
    
    
    //UploadComponent
   
];