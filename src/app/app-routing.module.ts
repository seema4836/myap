import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { ListCategoryComponent } from './categories/list-category/list-category.component';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';
import { LoginGuard } from './auth/login.guard';
import { ForgetpasswodComponent } from './forgetpasswod/forgetpasswod.component';
import { UsersModule } from './users/users.module';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addproduct', component: AddproductComponent,canActivate:[LoginGuard]},
  { path: 'addcat', component: AddcategoryComponent},
  { path: 'listcat', component: ListCategoryComponent },
  { path: 'viewproducts', component: ViewproductsComponent },
  { path: 'forgetpassword', component:ForgetpasswodComponent},
  { path: 'resetpassword', component:ResetpasswordComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module')
  .then(m => m.AdminModule)
},
{ path: 'users', loadChildren: () => import('./users/users.module')
  .then(m => m.UsersModule)}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
