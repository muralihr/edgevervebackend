import { Component } from '@angular/core'; 
import {AlumniService} from './alumni.service';
import { AuthServerProviderService } from './auth-server-provider.service';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AlumniService]
})
export class AppComponent {
  title = 'Infy Demo!';
  item: string = "";
  loggedIn:boolean = false;
  subscription: any;
  constructor(private navService:AuthServerProviderService,  private router: Router, private $localStorage: LocalStorageService,) {}

clicked(event) {
   console.log("received logout");    
   localStorage.setItem('auth_token', "");
   this.loggedIn = false;
   this.router.navigate(['/login'], { queryParams: { returnUrl: "/" }});
  }
  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  
  selectedNavItem(item: string) 
  {

    console.log("received username" +item);    
    this.item = item;
    this.loggedIn = true;
    this.router.navigate(['/'], { queryParams: { returnUrl: "/" }});
 
        
  }
  
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }
}
