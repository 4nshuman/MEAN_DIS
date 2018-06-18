import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-dislogin',
  templateUrl: './dislogin.component.html',
  styleUrls: ['./dislogin.component.css']
})
export class DISLoginComponent implements OnInit {
  public user={isValid: false};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    var userSession = sessionStorage.getItem('username');
    if(userSession){
      console.log('user already logged in, redirecting');
    }
  }

  login(data){
    this.user = data;
    console.log(this.user);
    if(this.user['isValid']){
      console.log('create a session');
      sessionStorage.setItem('username',this.user['userName']);
    }
    else{
      console.log('invalid user');
    }
  }

  signIn(data){
    this.loginService.validateUser(data)
      .subscribe(data => this.login(data));
  }

}
