import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { AppComponent } from '../app.component';
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-dislogin',
  templateUrl: './dislogin.component.html',
  styleUrls: ['./dislogin.component.css']
})
export class DISLoginComponent implements OnInit {
  public user={isValid: false};
  private err = '';
  constructor(private loginService: LoginService, private conf: Configuration) { }
 
  ngOnInit() {
    if(sessionStorage.getItem('err')){
      this.err = sessionStorage.getItem('err');
      sessionStorage.removeItem('err');
    }
    this.validateSession();
    this.conf.appTitle = 'Welcome to Document Ingestion Service';
    console.log(this.conf.err);
  }

  validateSession(){
    var userSession = sessionStorage.getItem('token');
    if(userSession){
      console.log('user already logged in, redirecting');
      window.location.href = '/dashboard';
    }
  }

  signInValidate(APIData,formData){
    //console.log(APIData);
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
      this.validateSession();
    }
    else if(!APIData['auth']){
      console.log('invalid user');
    }
    else if(APIData['status']=='sign in failure'){
      console.log('Sign In API failed');
    }
  }

  signIn(formData){
    this.loginService.validateUser(formData)
      .subscribe(
        data => this.signInValidate(data,formData),
        err => {
          if(err.status==401){
            console.log('Unauthorized User');
          }
        }
      );
  }

}
