import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  urlLogin: string = 'https://stormy-ocean-60188.herokuapp.com/login';
  constructor(private http: HttpService) { }

  userLogin(user): Observable<any>{
    console.log('dupa');
    return this.http.post(this.urlLogin, '{"username":"Philips7","password":"Dupa12345"}')
      .map(res => res.json());
  }
}
