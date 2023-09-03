import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryPagesComponent } from './pages/category-pages/category-pages.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'category',
    component: CategoryPagesComponent
  },
  {
    path: 'category/:id',
    component: CategoryPagesComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
