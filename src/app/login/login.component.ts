import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _loginService:LoginService) { }

  loginUser:any;

  ngOnInit() {
  }
  
  user:any={};
  //disabled=false;
  onSubmit(){
    console.log(this.user.email);
    this.loginUser = localStorage.getItem(this.user.email);
    if(this.loginUser!=null && this.loginUser.password == this.user.pasword){
          console.log('registered user');
          this._loginService.saveLoginData(this.user.email,this.user);
          
          this._router.navigate(['/news']);
          
    }
    else
      alert("user doesn't exist, please register");
  }
}
