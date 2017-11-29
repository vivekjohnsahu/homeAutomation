import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: any;

  constructor(private http:Http){
    this.token = localStorage.getItem('token');
  }
  private adminUrl = "http://54.162.3.238:3005/admin/";
  user(user: any) {
      return this.http.post(`${this.adminUrl}login`, user).map(res => res.json());
  }
  private forgotUrl = "http://54.162.3.238:3005/admin/forgotPassword";
  forgot(email: any) {
    return this.http.put("http://54.162.3.238:3005/admin/forgotPassword", {email:email}).map(res => res.json());
  }
}
