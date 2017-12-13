import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ LoginService } from '../services/login.service';
import { Router } from '@angular/router';
export interface loginparams{
  email: string;
  password: string;
  chek: any;   
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[ LoginService ]
})
export class LoginComponent implements OnInit {
  private loginparam:loginparams;
  email:any;
  password:any;
  chek: any; 
  emailRegrex: string;
  email_name_error:boolean;
  email_name_error_msg:any;
  pass_name_error:boolean;
  pass_name_error_msg:any;
  success_error:boolean;
  success_error_msg: any;
  invalid_error:boolean;
  invalid_error_msg: any;

  constructor(private services: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginparam=
    {
      email:"",
      password:"",
      chek:"",                                                            
    }
  }
  login(){
    this.emailRegrex = '^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$';

     if(this.loginparam.email == "" || this.loginparam.email == undefined){
      this.email_name_error = true;
      this.email_name_error_msg = "This field is required";
      return false;
  } else if ( !this.loginparam.email.match(this.emailRegrex)) {
      this.email_name_error = true;
      this.email_name_error_msg = "Please enter valid email id";
      return false;
  } else {
      this.email_name_error = false;
  }
  if ( this.loginparam.password == "" || this.loginparam.password == undefined ) {
    this.pass_name_error = true;
    this.pass_name_error_msg = "This field is required";
    return false;
} else {
    this.pass_name_error = false;
}
this.services.user(this.loginparam).subscribe(
  data => {
    // console.log(JSON.stringify(data.status));
    if(data.status == '200'){
      // console.log({userData:data})
      localStorage.setItem('adminData', JSON.stringify(data.response));
      localStorage.setItem('access_token', data.response.access_token);  
      this.success_error = true;
      this.router.navigate(['/dashboard'])
      return false;
    } else {
      this.invalid_error = true;
      this.invalid_error_msg = "invalid login"; 
    }   
  },
  error => {
    this.invalid_error = true;
    this.invalid_error_msg = "The email or password you entered is incorrect.";
  }
);
this.loginparam.email="";
this.loginparam.password="";
this.loginparam.chek="";
  }

  clean(){
    this.email_name_error = false;
    this.pass_name_error = false;
    this.success_error = false;
    this.invalid_error = false;
  }
  }
