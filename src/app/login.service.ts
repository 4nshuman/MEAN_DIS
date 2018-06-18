import { Injectable } from '@angular/core';
import { Configuration } from "./app.constants";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  config = new Configuration;
  constructor(private http: HttpClient) { }

  validateUser(userData): Observable<user[]>{
    return this.http.post<user[]>('http://localhost:8081/api/signIn',userData);
  }
}
