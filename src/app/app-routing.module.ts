import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DISLoginComponent } from "./dislogin/dislogin.component";
import { DISDashboardComponent } from "./disdashboard/disdashboard.component";
import { DISNotFoundComponent } from './disnot-found/disnot-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DISDashboardComponent },
  { path: 'login', component: DISLoginComponent },
  { path: '**', component: DISNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
