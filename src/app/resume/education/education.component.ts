import {
  Component,
  OnInit
} from '@angular/core';
import {
  Education
} from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  constructor() {}

  ngOnInit() {
    this.education = [{
        title: 'Professional Title as Informatics Engineering',
        date: '2012',
        institution: 'Technological University of Chile INACAP',
        place: 'Puerto Montt'
      },
      {
        title: 'Programmer Analyst',
        date: '2010',
        institution: 'Technical Training Center INACAP',
        place: 'Puerto Montt'
      },
    ];
  }

}
