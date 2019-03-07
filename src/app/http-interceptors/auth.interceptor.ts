import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let newRequest = req;
    if (this.userService.isLoggedIn()) {
      newRequest = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + this.userService.getAuthToken())
      });
    }
    return next.handle(newRequest);
    // .do(
    //   (err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401) {
    //         this.router.navigate(['login']);
    //       }
    //     }
    //   }
    // );
  }
}
