import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(route.routeConfig.path == 'home'){
      return this.checkLogin();
    }
    return true;
  }

  checkLogin(): boolean {
    if(this.userService.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
