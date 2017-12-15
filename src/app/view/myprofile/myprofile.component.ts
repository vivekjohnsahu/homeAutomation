import { Component, ChangeDetectorRef  } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'myProfile',
  providers: [AdminService],
  templateUrl: './myprofile.component.html' 
})
export class MyProfileComponent  { 
    access_token: string;
    profile_img: any;
    name: string;
    phone_number: string;
    email: string;
    address: string;

    editProfileCheck: boolean;
   
    constructor(private _service: AdminService, private route:ActivatedRoute, private changeDetector:ChangeDetectorRef) {
        route.params.subscribe(val => {
            let userData = JSON.parse(localStorage.getItem("user"));
            let access_token = localStorage.getItem('access_token');

            this.profile_img = "assets/img/0180441436.jpg";
            this.name = userData.first_name;
            this.email = userData.email;
            this.phone_number = userData.phone_number;
        });
    }

    ngOnInit() {
        // this.changeDetector.detectChanges();
    }

    editProfilePopup () {
        this.editProfileCheck = true;
        document.getElementById("modal").style.display = "block";
    }

    openChangePasswordPopup() {
        
    }
    // closeProfilePopup () {
    //     this.editProfileCheck = false;
    // }
    

    // onChangeUserImage(event: EventTarget) {
	// 	let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
	// 	let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
	// 	let files: FileList = target.files;
	// 	this.file = files[0];

	// 	let access_token = JSON.parse(localStorage.getItem("access_token"));
    //     let formData = new FormData();
    //     formData.append("user_thumbnail", this.file);
    //     formData.append("access_token", access_token); 
    //     // this._service.upload_user_thumbnail(formData).subscribe(
    //     //     data => {
    //     //         console.log(data);
    //     //         // console.log(data.response.user_thumbnail);
    //     //         this.user_thumbnail = data.response;
    //     //     },
    //     //     error => {
    //     //         console.log(error);
    //     //     }
    //     // );
	// }

    // updateUserProfile() {

    //     let access_token = JSON.parse(localStorage.getItem("access_token"));

    //     if ( this.edit_username == '' || this.edit_username == undefined ) {
    //         this.edit_name_error = true;
    //         this.edit_name_msg = 'Please enter name';
    //         return false;
    //     }  else {
    //         this.edit_name_error = false;
    //     }

    //     // this._service.update_profile(access_token, this.edit_username, this.edit_user_work_position, this.edit_user_description, this.edit_user_address).subscribe(
    //     //     data => {
    //     //         console.log(data);
    //     //         let userDetailsData = data.response;
    //     //         this.username = userDetailsData.user_name;
    //     //         this.user_work_position = userDetailsData.work_position;
    //     //         this.user_description = userDetailsData.description;
    //     //         this.user_address = userDetailsData.address;

    //     //         this.editProfileCheck = false;

    //     //         this.edit_username = userDetailsData.user_name;
    //     //         this.edit_user_work_position = userDetailsData.work_position;
    //     //         this.edit_user_description = userDetailsData.description;
    //     //         this.edit_user_address = userDetailsData.address;
                
    //     //     },
    //     //     error => {
    //     //         console.log(error);
    //     //     }
    //     // );
    // }

}