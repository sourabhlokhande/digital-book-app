import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookBrowserComponent } from './book-browser/book-browser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path :'home', component:HomeComponent},
    {path : 'book-browser', component:BookBrowserComponent},
    {path : 'signup', component:SignupComponent},
    {path : 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }