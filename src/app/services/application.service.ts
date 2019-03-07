import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

import { Application } from '../beans/application';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': ' application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getAllDetectedApplications(){
    let params = new HttpParams().set('isRegistered', '0');
    return this.http
    .get<Application[]>('/api/application/views.ws', {params: params});
  }

  getAllRegisteredApplications(){
    let params = new HttpParams().set('isRegistered', '1');
    return this.http
    .get<Application[]>('/api/application/views.ws', {params: params});
  }
}
