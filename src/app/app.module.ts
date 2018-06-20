import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DISLoginComponent } from './dislogin/dislogin.component';
import { DISDashboardComponent } from './disdashboard/disdashboard.component';
import { DISNotFoundComponent } from './disnot-found/disnot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DISLoginComponent,
    DISDashboardComponent,
    DISNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
