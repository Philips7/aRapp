import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";

@Injectable()
export class UserService {

  urlLogin: string = 'https://stormy-ocean-60188.herokuapp.com/';
  constructor(private http: HttpService) { }

  userLogin(user): Observable<any> {
    return this.http.post(this.urlLogin, user)
      .map(res => res.json());
  }
}
