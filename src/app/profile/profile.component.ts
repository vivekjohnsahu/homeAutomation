import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor() { }
  data =localStorage.getItem('edit'); 
  userData:any;
  ngOnInit() {
    // console.log(JSON.parse(this.data));
    // console.log(this.data.first_name);
    console.log(JSON.parse(localStorage.getItem('edit')));
    this.userData = JSON.parse(this.data);
  }
}
