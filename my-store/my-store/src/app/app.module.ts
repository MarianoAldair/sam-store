import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { register } from 'swiper/element/bundle'
register();
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material.module' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HowLongPipe } from './pipes/how-long.pipe';
import { ChangeLetterPipe } from './pipes/change-letter.pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SecurityInterceptor } from './interceptors/security.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CategoryPagesComponent } from './pages/category-pages/category-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    ReversePipe,
    HowLongPipe,
    ChangeLetterPipe,
    LoginFormComponent,
    CreateUserFormComponent,
    NotFoundPageComponent,
    HomePageComponent,
    LandingPageComponent,
    LoginPageComponent,
    CategoryPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
