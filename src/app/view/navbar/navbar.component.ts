import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LogoutService } from '../../services/logout.service';
import $ from "jquery";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [LogoutService]
})
export class NavbarComponent {

  constructor(private services: LogoutService, private router: Router) {}

  toggleSidebar() {
		document.getElementById("home_toggle").classList.toggle("collapsed");
		document.getElementById("bodySidebarToggle").classList.toggle("layout-sidebar-collapsed");
		document.getElementById("sidenav").classList.toggle("sidenav-collapsed");
	}
  logoutClicked(){
		this.services.logout().subscribe(
		  data => {
			if(data.status == '200'){
				localStorage.removeItem("user");
				localStorage.removeItem('access_token');
				window.location.replace('/Login');
				// this.router.navigate(['/Login']);
			return false;
			}else if(data.status == '401'){
				localStorage.removeItem("user");
				localStorage.removeItem('access_token');
				window.location.replace('/Login');
				return false;
		  }else{
		  }      
	   },
	   error=>{	 
				localStorage.removeItem("user");
				localStorage.removeItem('access_token');
				window.location.replace('/Login');
	   }
	);

  }
  tooglelogout() {
    $("button").attr("aria-expanded", "true");
    document.getElementById("hide_dropdown").classList.toggle("open");
  }
}
