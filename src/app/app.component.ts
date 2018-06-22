import { Component } from '@angular/core';
import { Configuration } from './app.constants';
import { DISService } from './dis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userLoaded = false;
  private userName;
  logout;

  constructor(private conf: Configuration, private disService: DISService){  }

  ngOnInit(){
    this.disService.userLoaded.subscribe(data=> {
      this.userLoaded=data.loaded;
      this.userName=data.userName; 
    });
  }

  sendMessageToLogOut(){
    this.disService.setUserLoaded(false);
  }

}