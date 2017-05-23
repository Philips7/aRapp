import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: '',
    password: '',
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  userLogin() {
    this.userService.userLogin(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
