import { Component } from '@angular/core';
import { Configuration } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private conf: Configuration){  }
}
