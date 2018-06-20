import { Component, OnInit } from '@angular/core';
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-disdashboard',
  templateUrl: './disdashboard.component.html',
  styleUrls: ['./disdashboard.component.css']
})
export class DISDashboardComponent implements OnInit {

  constructor(private conf: Configuration) { }

  ngOnInit() {
    this.conf.appTitle = "Document Ingestion Service";
  }

}
