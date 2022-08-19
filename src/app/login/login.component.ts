import { Component, OnInit } from '@angular/core';
import { Login } from '../models/loginmodel';
import { LoginService } from '../service/loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login : Login = {
    AuthorName :'',
    Password: '',
  }
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {}

  onSubmit(){
    console.log("i am hit in login component")
    try
    {
      this.loginService.loginValidation(this.login).subscribe(response => localStorage.setItem("token",response));
    }
    catch(error)
    {
      console.log(error)
    }
    

}
}
