import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/index';
@Injectable()
export class AuthGardService implements CanActivate {

  constructor(private auth:LoginService, private route:Router) { }

  canActivate(): boolean{
    if(!this.auth.isAuthenticated()){
      console.log('you are not autorized');
      return false;
    }
   
    return true;

  }
}
