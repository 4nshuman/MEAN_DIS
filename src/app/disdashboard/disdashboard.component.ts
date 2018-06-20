import { Component, OnInit } from '@angular/core';
import { Configuration } from '../app.constants';
import { Session } from 'protractor';
import { DISService } from "../dis.service";

@Component({
  selector: 'app-disdashboard',
  templateUrl: './disdashboard.component.html',
  styleUrls: ['./disdashboard.component.css'],
})
export class DISDashboardComponent implements OnInit {

  constructor(private conf: Configuration, private disService: DISService) { }

  ngOnInit() {
    this.validateSession();
  }

  validateSession(){
    var userSession = sessionStorage.getItem('token');
    if(!userSession){
      sessionStorage.setItem('err','Please Log in.');
      window.location.href = '/login';
    }
    else{
      this.disService.validateSessionToken()
       .subscribe(
         data => {
           this.getDataFromAPI()
         },
         err => {
          console.log('Token Invalid');
          sessionStorage.removeItem('token');
          sessionStorage.setItem('err','Please Log in. Token invalid.');
          window.location.href = '\login'
         }
       );
    }
  }

  getDataFromAPI(){
    this.disService.getUserUploadProfiles()
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}
