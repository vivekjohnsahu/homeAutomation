import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[ LoginService ]
})
export class ForgotComponent implements OnInit {
  email:any;
  emailRegrex: string;
  email_name_error:boolean;
  email_name_error_msg:any;
  success_error:boolean;
  invalid_error:boolean;
  invalid_error_msg:any;
  success_error_msg: string;

  constructor(private services: LoginService, private router: Router) { }

  ngOnInit() {
  }
forgot(){
this.emailRegrex = '^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$';

     if(this.email == "" || this.email == undefined){
      this.email_name_error = true;
      this.email_name_error_msg = "This field is required";
      return false;
  } else if ( !this.email.match(this.emailRegrex)) {
      this.email_name_error = true;
      this.email_name_error_msg = "Please enter valid email id";
      return false;
  } else {
      this.email_name_error = false;
  }
  this.services.forgot(this.email).subscribe(
    data => {
      if(data.status == '200'){
        this.success_error = true;
        this.success_error_msg ="An Password has been sent ON your email,please use password for login.";
        this.router.navigate(['/login'])   
      return false;
      }else{
        this.invalid_error = true;
        this.invalid_error_msg = "The email you entered is incorrect."; 
      }   
    },
    error => {
      this.invalid_error = true;
      this.invalid_error_msg = "The email you entered is incorrect."; 
    }
);
this.email="";
}
clean(){
  this.email_name_error = false;
  this.invalid_error = false;
}
}