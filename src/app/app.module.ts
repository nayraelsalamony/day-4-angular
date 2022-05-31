import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Template-drivenforms/login/login.component';
import { AddProductComponent } from './ReactiveForm/add-product/add-product.component';
import {HttpClientModule} from '@angular/common/http';
import { AllPhotoComponent } from './Api/all-photo/all-photo.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProductComponent,
    AllPhotoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
