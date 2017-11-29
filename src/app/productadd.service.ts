import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductaddService {
    constructor(private http:Http){}
    private porductUrl = "http://54.162.3.238:3005/product";
    create(obj: any) {
        let access_token =localStorage.getItem('access_token'); 
        let headers = new Headers({'Content-Type': 'application/json'});  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.post(`${this.porductUrl}`, obj,options).map(res => res.json());
    }
}
