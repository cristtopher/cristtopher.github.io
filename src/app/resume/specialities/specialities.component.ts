import {
  Component,
  OnInit
} from '@angular/core';
import {
  Speciality
} from './speciality'

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  specialities: Speciality[] = []
  constructor() {}

  ngOnInit() {
    this.specialities = [
      {
        name: 'MEAN Stack',
        icon: 'fab fa-js'
      },
      {
        name: 'People Management',
        icon: 'fas fa-users'
      },
      {
        name: 'Gnu / Linux',
        icon: 'fab fa-linux'
      },
      {
        name: 'Documentation',
        icon: 'fas fa-book'
      },
      {
        name: 'API Rest',
        icon: 'fas fa-cloud'
      },
      {
        name: 'Projects Management',
        icon: 'fas fa-project-diagram'
      },
      {
        name: 'Agile Methodologies',
        icon: 'fas fa-fighter-jet'
      },
    ]
  }

}
