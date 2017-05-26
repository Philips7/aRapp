import {Component, OnInit, ViewChild} from '@angular/core';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  removeVideo() {
    if (document.querySelector('video'))
      document.querySelector('video').remove();
  }
}
