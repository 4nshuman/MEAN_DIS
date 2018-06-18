import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getDemoData(){
    return '{msg:\'test\'}';
  }
}
