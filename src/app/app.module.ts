import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { ListCategoryComponent } from './categories/list-category/list-category.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswodComponent } from './forgetpasswod/forgetpasswod.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AddcategoryComponent,
    ViewproductsComponent,
    AddproductComponent,
    ForgetpasswodComponent,
    ResetpasswordComponent,
    ListCategoryComponent
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
