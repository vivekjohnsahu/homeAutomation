import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CategoryComponent } from './view/category/category.component';
import { MyProfileComponent } from './view/myprofile/myprofile.component';
import { ChangePasswordComponent } from './view/change-password/change-password.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { ProductComponent } from './view/product/product.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { ForgotComponent } from './view/forgot/forgot.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'category',
    component: CategoryComponent,
    data: {
      title: 'category'
    }
  },
  {
    path: 'profile',
    component: MyProfileComponent,
    data: {
      title: 'profile'
    }
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {
      title: 'changepassword'
    }
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: {
      title: 'editprofile'
    }
  },
  {
    path: 'app-product',
    component: ProductComponent,
    data: {
      title: 'product'
    }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: {
      title: 'list'
    }
  },
  {
    path: 'app-forgot',
    component: ForgotComponent,
    data: {
      title: 'forgot'
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}