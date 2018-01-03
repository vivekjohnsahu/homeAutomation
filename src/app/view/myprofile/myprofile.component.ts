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

constructor(private _service: AdminService, private route:ActivatedRoute, private changeDetector:ChangeDetectorRef) {
    route.params.subscribe(val => {
        let userData = JSON.parse(localStorage.getItem("user"));
        let access_token = localStorage.getItem('access_token');

        this.profile_img = "http://54.162.3.238:3005/profileImage/1514965727370.jpg";
        this.name = userData.first_name;
        this.email = userData.email;
        this.phone_number = userData.phone_number;
        console.log(userData)
    });
}
ngOnInit() {
}
}