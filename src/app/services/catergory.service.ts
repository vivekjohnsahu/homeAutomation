import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CatergoryService {

  constructor(private http:Http){}
  private catergoryUrl = "http://54.162.3.238:3005/category";

  catergory() {
    let access_token = localStorage.getItem('access_token'); 
    let headers = new Headers();  
    headers.append('Authorization','Bearer ');
    headers.append('access_token',access_token);
    let options = new RequestOptions({headers: headers});
    return this.http.get(`${this.catergoryUrl}`,options).map((res:Response) => res.json()
  );
}


}