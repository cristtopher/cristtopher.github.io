import {
  Component,
  OnInit
} from '@angular/core';
import {
  Skill
} from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  constructor() {}

  ngOnInit() {
    this.skills = [{
        name: 'Backend Loopback',
        progress: 95
      },
      {
        name: 'Frontend AngularJS',
        progress: 95
      },
      {
        name: 'Frontend Angular 6',
        progress: 90
      },
      {
        name: 'DevOps',
        progress: 80
      },
      {
        name: 'Server Admin',
        progress: 100
      },
      {
        name: 'Docker',
        progress: 100
      },
      {
        name: 'Kubernetes',
        progress: 100
      },
      {
        name: 'Android (Java)',
        progress: 95
      },
      {
        name: 'Jira / Confluence / Pipelines',
        progress: 100
      },
      {
        name: 'Azure',
        progress: 80
      },
      {
        name: 'AWS',
        progress: 100
      }
    ];
  }

}
