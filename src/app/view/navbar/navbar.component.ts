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
  tooglelogout() {
    $("button").attr("aria-expanded", "true");
    document.getElementById("hide_dropdown").classList.toggle("open");
  }
  logoutClicked() {
    this.services.logout().subscribe(
      data => {
        localStorage.removeItem("user");
        localStorage.removeItem('access_token');
        window.location.replace('/Login');
        return false;
      },
      error => {
        localStorage.removeItem("user");
        localStorage.removeItem('access_token');
        window.location.replace('/Login');
        return false;
      }
    );
  }
}
