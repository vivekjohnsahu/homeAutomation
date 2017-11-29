import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ LogoutService } from '../logout.service';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[ LogoutService ]
})
export class HomeComponent implements OnInit {

  constructor(private services: LogoutService, private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $(".navbar-account-btn").click(function(){
          $("#hide_dropdown").toggle()
      });
      $("#hide_profile").click(function(){
          $("#hide_dropdown").hide()
      });
      $("#hide_sing").click(function(){
          $("#hide_dropdown").hide()
      });
  //     $("#home_toggle").click(function(){
  //       $(".navbar-header").animate({
  //         left: '-220px'
  //     });
  //     });
  //     $("#home_toggle").click(function(){
  //       $(this).animate({
  //         left: '-200px'
  //     });
  //     });
  //     $("#home_toggle").click(function(){
  //       $(".layout-sidebar-backdrop").animate({
  //         left: '-220px'
  //     });
  //     });
  //     $("#home_toggle").click(function(){
  //       $(".layout-sidebar").animate({
  //         left: '-220px'
  //     });
  //   });
  // });
  // $('#myCollapsible').collapse({
  //   toggle: false
  // })
  // $(document).ready(function () {
    
  //       $('#home_toggle').on('click', function () {
  //           $('#sidenav').toggleClass('active');
  //       });
    
 
  // $(window).load(function(){
    
  //         // For Driver Page
  //         if ( $('.profilePage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.profilePageNav').addClass("active");
  //         }
  //         if ( $('.dashboardPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.dashboardPageNav').addClass("active");
  //         }
  //         if ( $('.addInterestPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.addInterestNav').addClass("active");
  //         }
  //         if ( $('.questionListPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.questionListNav').addClass("active");
  //         }
  //         if ( $('.addGrapesPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.addGrapesNav').addClass("active");
  //         }
  //         if ( $('.grapesComboPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.grapesComboNav').addClass("active");
  //         }
  //         if ( $('.comboListPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.comboListNav').addClass("active");
  //         }
  //         if ( $('.userListPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.userListNav').addClass("active");
  //         }
  //         if ( $('.PremiumUserListPage').length ) {
  //           $('.sidenav-item').removeClass("active");
  //           $('.PremiumUserListNav').addClass("active");
  //         }
          
        // });  
       });
                // $(window).scroll(function (){
                //     var window_top = $(window).scrollTop();
                //     var div_top = $('.tabs-new').position().top;
                //     console.log(window_top);
                //     console.log(div_top);
                //     if (window_top > div_top) {
                //         $('.tabs-new').addClass('stick');
                //         $('.tabs-new').parents('.layout-content-body').removeClass('layout-content-body').addClass('layout-content-body-dummy');
                //     } else {
                //         $('.tabs-new').parents('.layout-content-body').removeClass('layout-content-body-dummy').addClass('layout-content-body')
                //     }
    
                //     if ( window_top < 74 ) {
                //       $('.tabs-new').removeClass('stick');
                //     }
                // });
    
 }
 logoutClicked(){

      this.services.logout().subscribe(
        data => {
          if(data.status == '200'){
                // LogoutService.isAuthenticated = false;
                // LogoutService.profile = null;
                // LogoutService.profilePromise = null;
                // LogoutService.idToken = null;
                // LogoutService.state = null;
                // LogoutService.accessToken = null;
                // LogoutService.tokenPayload = null;
            console.log(data)
          return false;
          }else{

          }   
        },
        error => {
        //   this.invalid_error = true;
        //   this.invalid_error_msg = "The email you entered is incorrect."; 
        }
    );
    // this.email="";
    }
}
