import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogoutService {
  token: any;
  
    constructor(private http:Http){
      this.token = localStorage.getItem('token');
    }
  private logoutUrl = "http://54.162.3.238:3005/admin/";
  logout() {
    let access_token =localStorage.getItem('access_token'); 
    // console.log(access_token);
    let headers = new Headers({'Content-Type': 'application/json'});  
    headers.append('Authorization','Bearer ');
    headers.append('access_token',access_token);
    let options = new RequestOptions({headers: headers});
    return this.http.post(`${this.logoutUrl}logout`,{},options).map(res => res.json());
}
}
