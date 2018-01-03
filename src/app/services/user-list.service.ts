import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserListService {

  constructor(private http:Http){}
  private userlistUrl = "http://54.162.3.238:3005/user";

  userlist() {
    return this.http.get(`${this.userlistUrl}`,).map((res:Response) => res.json()
  );
}

}
