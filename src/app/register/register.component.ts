import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    
  }

  userData;

  registerForm = this._formBuilder.group({
    userName:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    phoneNumber:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    gender:['']

  })
  get email(){
    return this.registerForm.get('email');
  }
  onSubmit(){
    console.log(this.registerForm.value);
    this.userData=this.registerForm.value;
    console.log(this.userData);
    if(localStorage.length>0){
        if(localStorage.getItem(this.userData.email))
          console.log('user exists');
        else
          localStorage.setItem(this.userData.email, JSON.stringify(this.userData));
    }
    else
      localStorage.setItem(this.userData.email, JSON.stringify(this.userData));
    if(this.registerForm.invalid){
      return;
    }
    alert('success');

    for (var i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i))
    }

  }

}
