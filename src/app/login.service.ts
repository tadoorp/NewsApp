import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginCheck:boolean;
  userName:string;

  saveLoginData(userName, userObject){
    console.log(userName);
    this.userName=userName;
    
    sessionStorage.setItem(userObject.email, JSON.stringify(userObject));
    console.log(this.loginCheck);
    this.loginCheck = true;
    
  }

}
