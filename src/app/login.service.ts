import { Injectable } from '@angular/core';
import { Configuration } from "./app.constants";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { response } from './dataModelClasses/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  config = new Configuration;
  constructor(private http: HttpClient) { }

  validateUser(userData): Observable<response>{
    /* const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authentication' : sessionStorage.getItem('token')
    }); */
    console.log('test');
    return this.http.post<response>(this.config.ServerWithApiUrl+'signIn',userData/* , {headers} */);
  }
  
}
