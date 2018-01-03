import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from '../../services/admin.service';

@Component({
	selector: 'login',
	providers: [AdminService], 
	templateUrl: './login.component.html'
})
export class LoginComponent  { 

email:string;
password:string;
showEmailError: boolean;
login_email_msg: string;
showPasswordError: boolean;
login_password_msg: string;
emailRegex: string;
showLoginError: boolean;
login_error_msg: string;
userItem: string;
access_token: string;
valid_error: boolean;
success_msg: string;

constructor(private _service:AdminService, router: Router) {
    this.userItem = JSON.parse(localStorage.getItem("user"));
    this.access_token = JSON.parse(localStorage.getItem("access_token"));
    if(this.access_token != null) {
        router.navigate(['dashboard']);
        // window.location.replace('/dashboard');
    }
}

login() {
    this.emailRegex = "^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
    if ( this.email == '' || this.email == undefined ) {
        this.showEmailError = true;
        this.login_email_msg = 'Please enter email';
        return false;
    } else if (!this.email.match(this.emailRegex)) {
        var regex = new RegExp("^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$");
        this.login_email_msg = "Please enter the valid email address.";
        this.showEmailError = true;
        return false;
    } else {
        this.showEmailError = false;
    }

    if ( this.password == '' || this.password == undefined ) {
        this.showPasswordError = true;
        this.login_password_msg = 'Please enter password';
        return false;
    } else {
        this.showPasswordError = false;
    }

    this._service.login(this.email, this.password).subscribe(
        data => {
        if(data.status == '200'){
            this.showLoginError = false;
            localStorage.setItem('user', JSON.stringify(data.response));
            localStorage.setItem('access_token', data.response.access_token);
            window.location.replace('/dashboard');
        }else if(data.status == '400'){
            this.valid_error = true;
            this. success_msg = "The email or password you entered is incorrect.";
          }
        else{
            this.valid_error = false
        }
    },
    error => {
        let msg = JSON.parse(error._body);
        this.valid_error = true;
        this. success_msg = "The email or password you entered is incorrect.";
    }
);
this.email="";
this.password="";
}
clean(){
    this.showEmailError = false;
    this.showEmailError = false;
    this.valid_error = false
  }
}