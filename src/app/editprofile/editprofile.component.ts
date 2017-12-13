import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ EditprofileService } from '../services/editprofile.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
export interface edits{ 
  first_name:string;
  phone_number:any;
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
  first_name:string;
  name_error:boolean;
  name_error_msg:string;
  phone_error_msg:string;
  phone_error:boolean;
  phone_number:any;
  invalid_error:boolean;
  invalid_error_msg:string
  success_msg:string;
  fileListData:any;
  fileListUrl:Array<any> = [];
  image:any;

  constructor(private services:EditprofileService, private router: Router,  private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.edit=
    {
      first_name:"",
      phone_number:"",
    }
  }
  add(){
    if( this.edit.first_name == "" || this.edit.first_name == undefined ){
      this.name_error = true;
      this.name_error_msg = "name is required";
      return false;
    }else {
      this.name_error = false;
     }
     if( this.edit.phone_number == undefined ) {
      this.phone_error = true;
      this.phone_error_msg = "Number is required";
      return false;
     }else if(this.edit.phone_number.length <10 ){
        this.phone_error = true;
        this.phone_error_msg = "Number not valid";
        return false;
     }else {
      this.phone_error = false;
     }
     this.services.edit(this.edit).subscribe(
      data => {
        if(data.status == '200'){
          // let file: File = this.fileListData[0];
          // console.log(file);
          // localStorage.setItem('image', this.fileListData);  
          localStorage.setItem('edit', JSON.stringify(data.response));
          let user = JSON.parse(localStorage.getItem('edit'));
          this.invalid_error = true;
          this. success_msg = "Edit profile.";
          setTimeout(() => {
          this.router.navigate(['/profile'])
        }, 200);
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
    //  console.log(this.edit)
     this.edit.first_name="";
     this.edit.phone_number="";
  }
  fileChange(event) {
    this.fileListUrl[0] = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0])); 
    this.fileListData = event.target.files;
    // console.log(this.fileListData);   
 }
  clean(){
  this.name_error = false;
  this.phone_error = false;
  this.invalid_error = false;
}
}
