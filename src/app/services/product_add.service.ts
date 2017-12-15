import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductaddService {
    constructor(private http:Http){}
    private porductUrl = "http://54.162.3.238:3005/product";
    create(formData: any) {
        console.log(formData)
        let access_token =localStorage.getItem('access_token'); 
        let headers = new Headers();  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.post(`${this.porductUrl}`, formData, options).map(res => res.json());
    }
    getproduct() {
        let access_token =localStorage.getItem('access_token'); 
        let headers = new Headers();  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.get(`${this.porductUrl}`,options)
        .map((res:Response) => res.json());
    }
    deleteproduct(product_id){
        console.log(product_id)
        let access_token =localStorage.getItem('access_token'); 
        let data = {product_id};
        let headers = new Headers();  
        headers.append('Authorization','Bearer ');
        headers.append('access_token',access_token);
        let options = new RequestOptions({headers: headers});
        return this.http.delete(`${this.porductUrl}/${product_id}`, options)
        .map((res:Response) => res.json()); 
    }
}