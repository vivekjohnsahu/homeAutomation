import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AdminService {
    token: any;
    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
     }

    private adminUrl = 'http://54.162.3.238:3005/admin/';

    login(user_email: string, user_password: string) {
        let access_token =localStorage.getItem('access_token'); 
        // console.log(access_token);
        let headers = new Headers({'Content-Type': 'application/json'});  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.adminUrl+'login', { email: user_email, password: user_password },options)
            .map(res => res.json());
    }
    
}