import { Component, OnInit, Input } from '@angular/core';
import { Configuration } from '../app.constants';
import { Session } from 'protractor';
import { DISService } from "../dis.service";

@Component({
  selector: 'app-disdashboard',
  templateUrl: './disdashboard.component.html',
  styleUrls: ['./disdashboard.component.css'],
})
export class DISDashboardComponent implements OnInit {
  private uploadProfileList = [];
  private selectedBatch;

  constructor(private conf: Configuration, private disService: DISService) { }

  ngOnInit() {
    this.disService.userLoaded.subscribe(data=> {
      if(!data){
        console.log('user to be logged off')
        sessionStorage.removeItem('token');
        sessionStorage.setItem('err','Logged Out.');
        setTimeout(window.location.href = '/login', 3000);
      }
    });
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
           this.disService.setUserLoaded({'loaded':true, 'userName': data.userName});
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
        data => {
          this.populateUploadProfileList(data.uploadProfileID);
        },
        err => console.log(err)
      );
  }

  populateUploadProfileList(profiledata){
    profiledata.forEach(element => {
      this.uploadProfileList.push(element['profile']);
    });
  }
}
