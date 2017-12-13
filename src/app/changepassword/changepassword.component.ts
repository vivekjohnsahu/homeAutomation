import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ ChangepasswordService } from '../services/changepassword.service';
export interface changes{ 
  old_password:any;
  password:any;
  newmatch_password:any;
}

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[ChangepasswordService]
})
export class ChangepasswordComponent implements OnInit {
  private change:changes;
  old_password:any;
  pass_error:boolean;
  pass_error_msg:string;
  password:any;
  pass_new_error:boolean;
  pass_new_error_msg:string;
  newmatch_password:any;
  pass_newmatch_error:boolean;
  pass_newmatch_error_msg:string;
  invalid_error:boolean;
  success_msg:string;
  invalid_error_msg:string;
  valid_error:boolean;

  constructor(private services:ChangepasswordService) { }

  ngOnInit() {
    this.change=
    {
      old_password:"",
      password:"",
      newmatch_password:""
    }
  }
  passchange(){
    if ( this.change.old_password == "" || this.change.old_password == undefined ) {
      this.pass_error = true;
      this.pass_error_msg = "Please enter your old password .";
      return false;
  } else {
      this.pass_error = false;
  }
  if ( this.change.password == "" || this.change.password == undefined ) {
    this.pass_new_error = true;
    this.pass_new_error_msg = "Please enter your new password .";
    return false;
  } else {
    this.pass_new_error = false;
  }
  if ( this.change.newmatch_password == "" || this.change.newmatch_password == undefined ) {
    this.pass_newmatch_error = true;
    this.pass_newmatch_error_msg = "Please confirm new password.";
    return false;
  }else if( !this.change.newmatch_password.match(this.change.password)) {
    this.pass_newmatch_error = true;
    this.pass_newmatch_error_msg = "password not match.";
    return false;
  }
  else {
    this.pass_newmatch_error = false;
  }
  this.services.change(this.change).subscribe(
    data => {
      if(data.status == '200'){
        this.valid_error = true;
        this. success_msg = "Change password.";
        return false; 
      }else if(data.status == '400'){
        this.invalid_error = true;
        this.invalid_error_msg = "password is missing."; 
        return false;
      }else {
        this.valid_error = false;
      }
    },
     error => {
        this.invalid_error = true;
        this.invalid_error_msg = "password is missing.";
      }
  );
  this.change.old_password="";
  this.change.password="";
  this.change.newmatch_password="";
}
clean(){
  this.pass_error = false;
  this.pass_new_error = false;
  this.pass_newmatch_error = false;
  this.valid_error = false;
}
}
