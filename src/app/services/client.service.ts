import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

import { Client } from '../beans/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': ' application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
  private router: Router) { }

  getAllClients() {
    return this.http.get<Client[]>('/api/client/getAllClients', httpOptions);
  }

}
