import { Component, OnInit } from '@angular/core';
import { Hobbie } from './hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: Hobbie[] = [];
  constructor() { }

  ngOnInit() {
    this.hobbies =[{
      name: 'Music',
      icon: 'fas fa-music'
    }, {
      name: 'LongBoard',
      icon: 'fas fa-skating'
    },
    {
      name: 'Trekking',
      icon: 'fas fa-walking'
    }, {
      name: 'Cycling',
      icon: 'fas fa-bicycle'
    }]
  }

}
