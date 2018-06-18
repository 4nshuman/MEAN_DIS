import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-dislogin',
  templateUrl: './dislogin.component.html',
  styleUrls: ['./dislogin.component.css']
})
export class DISLoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  clickme(){
    console.log('clicked');
    console.log(this.loginService.getDemoData());
  }

}
