import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../beans/user';
import { Role } from '../beans/role';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': ' application/json' })
};

const httpOptionsLogin = {
  headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("angular-ui:angular-secret") })
};

const httpOptionsLogout = {
  headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = null;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router) {
  }

  getAllRoles() {
    return this.http
      .get<Role[]>('/api/user/getAllRoles', httpOptions);
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('/api/user/getAllUsers', httpOptions);
  }

  getUserById(userId: number): Observable<User> {
    return this.http
      .get<User>('/api/user/getUserById/' + userId);
  }

  createUser(user: User) {
    let body = JSON.stringify(user);
    return this.http
      .post('/api/user/createUser', body, httpOptions)
      .subscribe(data => {
        console.log(data);
      });
  }

  updateUser(user: User) {
    let body = JSON.stringify(user);
    return this.http
      .put('/api/user/update/' + user.userId, body, httpOptions);
  }

  deleteUser(user: User) {
    this.http
      .delete('/api/user/delete/' + user.userId);
  }

  login(user: User) {
    const body = new HttpParams()
      .set('username', user.username)
      .set('password', user.password)
      .set('grant_type', 'password');

    this.http
      .post('/oauth/token', body.toString(), httpOptionsLogin)
      .subscribe(data => {
        this.saveAuthToken(data);
        this.router.navigate(['home']);
      });
  }

  saveAuthToken(token) {
    var expireDate = new Date().getTime() + (token.expires_in);
    this.cookieService.set("avocado-access-token", token.access_token, expireDate);
  }

  getAuthToken() {
    return this.cookieService.get('avocado-access-token');
  }

  checkXSRFToken() {
    return this.cookieService.check('Avocado-XSRF-Token');
  }

  getXSRFToken() {
    return this.cookieService.get('Avocado-XSRF-Token');
  }

  isLoggedIn(): boolean {
    if (this.cookieService.check('avocado-access-token')) {
      return true;
    }
    return false;
  }

  logout() {
    this.cookieService.delete('avocado-access-token');
    this.cookieService.delete('Avocado-XSRF-Token');
  }

}
