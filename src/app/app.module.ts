import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AddComponent } from './add/add.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FilterPipe } from './filter.pipe';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'add', component: AddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UserComponent,
    AddComponent,
    AddproductComponent,
    FilterPipe,
    LoginComponent,
    ForgotComponent,
    EditprofileComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
