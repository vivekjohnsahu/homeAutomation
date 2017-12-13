import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ LogoutService } from './services/logout.service';
import * as $ from 'jquery'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers:[ LogoutService ]
})
export class AppComponent implements OnInit {
	title = 'app';
	data =localStorage.getItem('edit'); 
	userData:any;
	currentState:any;
	hidelogout:boolean;

  constructor(private services: LogoutService, private router: Router) { }

  ngOnInit() {
		this.userData = JSON.parse(this.data);
		let access_token = localStorage.getItem("access_token");
		if (access_token != null) {
			// this.router.navigate(['/dashboard'])
			// this.hidelogout=false;
		}else {
			this.router.navigate(['/login'])
			this.hidelogout=true;
		}
	}
  toggleSidebar() {
		document.getElementById("home_toggle").classList.toggle("collapsed");
		document.getElementById("bodySidebarToggle").classList.toggle("layout-sidebar-collapsed");
		document.getElementById("sidenav").classList.toggle("sidenav-collapsed");
	}
  tooglelogout(){
		$("button").attr("aria-expanded","true");
		document.getElementById("hide_dropdown").classList.toggle("open");
	}
  logoutClicked(){
		this.services.logout().subscribe(
		  data => {
			if(data.status == '200'){
			  localStorage.removeItem('access_token');
			  localStorage.removeItem('adminData');
			  this.router.navigateByUrl('/login');
			return false;
			}else{
		  }   
	   },
	   error=>{
		localStorage.removeItem('access_token');
		localStorage.removeItem('adminData');
		this.router.navigateByUrl('/login');
	   }
	);
  }
}