import { Component, OnInit } from '@angular/core';
import { ILogin } from '../ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:ILogin={username:"",password:""}
  constructor() { }

  ngOnInit(): void {
  }
  login(userdata:ILogin){
    console.log(userdata)
  }

}
