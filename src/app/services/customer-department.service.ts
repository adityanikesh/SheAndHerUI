import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

import { Customer } from '../beans/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDepartmentService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getAllCustomers() {
    return this.http
      .get<Customer[]>('/api/customer/views.ws');
  }
}
