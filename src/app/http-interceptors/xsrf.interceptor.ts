import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class XSRFInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let newRequest = req;
    if (this.userService.checkXSRFToken()) {
      newRequest = req.clone({
        headers: req.headers.set('Avocado-XSRF-Token', this.userService.getXSRFToken()+'; Path=/sheandher')
      });
    } else {
      console.log('XSRF Token null');
    }
    return next.handle(newRequest);
  }
}
