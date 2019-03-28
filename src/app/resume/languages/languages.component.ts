import {
  Component,
  OnInit
} from '@angular/core';
import {
  Language
} from './language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [];
  constructor() {}

  ngOnInit() {
    this.languages = [{
        name: 'Javascript / Typescript',
        progress: 100
      },
      {
        name: 'Python',
        progress: 95
      },
      {
        name: 'Java',
        progress: 95
      },
      {
        name: 'C++',
        progress: 80
      },
      {
        name: 'Script Bash',
        progress: 100
      }
    ];
  }

}
