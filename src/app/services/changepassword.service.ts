import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ChangepasswordService {
  constructor(private http:Http){}
  private changeUrl = "http://54.162.3.238:3005/admin";
  change(change: any) {
      let access_token =localStorage.getItem('access_token'); 
      let headers = new Headers({'Content-Type': 'application/json'});  
      headers.append('Authorization','Bearer ');
      headers.append('access_token',access_token);
      console.log(headers);
      console.log(change);
      let options = new RequestOptions({headers: headers});
      return this.http.put(`${this.changeUrl}/updatePassword`, change,options).map(res => res.json());
  }
}
