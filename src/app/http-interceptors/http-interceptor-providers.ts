import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { XSRFInterceptor } from './xsrf.interceptor';
import { XhrInterceptor } from './xhr.interceptor';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  // { provide: HTTP_INTERCEPTORS, useClass: XSRFInterceptor, multi: true }
];
