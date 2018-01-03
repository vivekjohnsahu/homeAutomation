import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class EditprofileService {
    constructor(private http:Http){}
    private editUrl = "http://54.162.3.238:3005/admin";
    edit(formData: any) {
        let access_token =localStorage.getItem('access_token'); 
        let headers = new Headers();  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.put(`${this.editUrl}`, formData,options).map(res => res.json());
    }
}
