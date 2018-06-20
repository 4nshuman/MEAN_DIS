import { Injectable } from '@angular/core';
import { Configuration } from "./app.constants";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { response } from './dataModelClasses/response';
import { userUploadProfileResponse } from "./dataModelClasses/userUploadProfileResponse";

@Injectable({
  providedIn: 'root'
})
export class DISService {
  config = new Configuration;
  constructor(private http: HttpClient) { }

  validateSessionToken(): Observable<response>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization' : sessionStorage.getItem('token')
    });
    return this.http.post<response>(this.config.ServerWithApiUrl+'dashboard',{} ,{headers} );
  }

  getUserUploadProfiles(): Observable<userUploadProfileResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization' : sessionStorage.getItem('token')
    });    
    return this.http.post<userUploadProfileResponse>(this.config.ServerWithApiUrl+'getUserUploadProfile',{} ,{headers} );
  }
  
}
