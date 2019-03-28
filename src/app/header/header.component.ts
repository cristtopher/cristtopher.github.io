import { Component, OnInit } from '@angular/core';
import { Constants } from '../commons/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  me;
  constructor() {
    this.me = Constants.me;
  }

  ngOnInit() {
  }

}
