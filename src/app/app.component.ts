import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

constructor() { }

  ngOnInit() {
    let access_token = localStorage.getItem("access_token");
    if (access_token != null) {

    } else {
      window.location.href = "/login";
    }
   
  }

}