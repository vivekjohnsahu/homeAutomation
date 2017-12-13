import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const router: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'add', component: AddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'editprofile', component: EditprofileComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'addproduct', component: AddproductComponent },
  ];

  export const routes: ModuleWithProviders = RouterModule.forRoot(this.router);