import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {AdminService} from './services/admin.service';

@Component({
	selector: 'app-root',
	providers: [AdminService],
	templateUrl: './app.component.html'
})
export class AppComponent {
	userItem:any;
	access_token: string;
	loginSession: boolean;
	logoutSession: boolean;
	user_unique_id: string;
	searchSuggestion: boolean;
	searchUserList: any;
	searchNoUserList: boolean;

	constructor(private route:ActivatedRoute, router: Router, private _service: AdminService){
		this.userItem = localStorage.getItem("user");
		this.access_token = localStorage.getItem('access_token');
		if(this.access_token != null) {
			router.navigate(['dashboard']);
			this.logoutSession = true;
			this.user_unique_id = this.userItem.user_id;
		} else {
			this.loginSession = true;
		}
	}
    // logout() {
	// 	localStorage.removeItem("user");
	// 	localStorage.removeItem("access_token");
	// 	window.location.replace('');
	// }
}
