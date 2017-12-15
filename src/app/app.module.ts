import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './view/dashboard/dashboard.component';
import { LoginComponent }  from './view/login/login.component';
import { SidebarComponent }  from './view/sidebar/sidebar.component';
import { NavbarComponent }  from './view/navbar/navbar.component';
import { CategoryComponent } from './view/category/category.component';
import { MyProfileComponent } from './view/myprofile/myprofile.component';
import { DataTableModule } from "ng2-data-table";
import { FilterPipe } from './Pipe/filter.pipe';
import { AppRoutingModule } from './app.routing';
import { ChangePasswordComponent } from './view/change-password/change-password.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { ProductComponent } from './view/product/product.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpModule,
    DataTableModule
  ],
  declarations: [ 
    AppComponent, 
    DashboardComponent, 
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    CategoryComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    FilterPipe,
    ProductComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
