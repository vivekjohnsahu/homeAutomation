import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ EditprofileService } from '../editprofile.service';
export interface edits{ 
  name:string;
  phone:any;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[EditprofileService]
})
export class EditprofileComponent implements OnInit {
  private edit:edits;
  name:string;
  name_error:boolean;
  name_error_msg:string;
  phone_error_msg:string;
  phone_error:boolean;
  phone:string;
  invalid_error:boolean;
  invalid_error_msg:string
  success_msg:string;

  constructor(private services:EditprofileService) { }

  ngOnInit() {
    this.edit=
    {
      name:"",
      phone:"",
    }
  }
  add(){
    if( this.edit.name == "" || this.edit.name == undefined ){
      this.name_error = true;
      this.name_error_msg = "name is required";
      return false;
    }else {
      this.name_error = false;
     }
     if( this.edit.phone == undefined ) {
      this.phone_error = true;
      this.phone_error_msg = "Number is required";
      return false;
     }else if(this.edit.phone.length <10 ){
        this.phone_error = true;
        this.phone_error_msg = "Number not valid";
        return false;
     }else {
      this.phone_error = false;
     }
     this.services.edit(this.edit).subscribe(
      data => {
        if(data.status == '200'){
          this.invalid_error = true;
          this. success_msg = "Edit profile.";
          return false; 
        }else if(data.status == '400'){
          this.invalid_error = true;
          this.invalid_error_msg = "Some parameter missing."; 
          return false;
        }else {
          this.invalid_error = false;
        }
      },
      // error => {
      //   this.invalid_error = true;
      //   this.invalid_error_msg = "Some parameter missing.";
      // }
     );
     this.edit.name="";
     this.edit.phone="";
  }
  clean(){
  this.name_error = false;
  this.phone_error = false;
  this.invalid_error = false;
}
}
