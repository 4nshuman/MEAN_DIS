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

  signInValidate(APIData,formData){
    console.log(APIData);
    if(APIData['auth']){
      console.log('Valid User');
      sessionStorage.setItem('token',APIData['token']);
      if(formData.loginremember){
        var cookieExpiry = new Date();
        var time = cookieExpiry.getTime();
        var expireTime = time + 1000*60;
        cookieExpiry.setTime(expireTime);
        document.cookie = "username="+APIData['userName']+";expires="+cookieExpiry['toGMTString']();
      }
    }
    else if(APIData['status']=='sign in failure'){
      console.log('Sign In API failed');
    }
    else{
      console.log('invalid user');
    }
  }

  signIn(formData){
    this.loginService.validateUser(formData)
      .subscribe(APIData => this.signInValidate(APIData,formData));
  }

}
