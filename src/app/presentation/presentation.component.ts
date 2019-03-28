import { Component, OnInit } from '@angular/core';
import { Constants } from '../commons/constants/constants';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  me;
  
  constructor() {
    this.me = Constants.me;
  }

  ngOnInit() {
  }

}
