import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-dislogin',
  templateUrl: './dislogin.component.html',
  styleUrls: ['./dislogin.component.css']
})
export class DISLoginComponent implements OnInit {
  public user;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  clickme(data){
    console.log('clicked');
    this.loginService.validateUser(data)
      .subscribe(data => console.log(data));
    //console.log(this.user);    
    /* console.log(this.loginService.getDemoData());
    console.log("form data "+ data.loginremember); */
  }

}
