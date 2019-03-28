import {
  Component,
  OnInit
} from '@angular/core';
import {
  Job
} from './job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  constructor() {}

  ngOnInit() {
    this.jobs = [{
        title: 'Fullstack Developer',
        date: '01.2019 - Present',
        company: 'Kubos / Banco de Chile',
        place: 'Santiago',
        url: 'kubos.cl'
      },
      {
        title: 'Fullstack Developer',
        date: '08.2018 - 01.2019',
        company: 'Ideal Control',
        place: 'Puerto Montt',
        url: 'idealcontrol.cl'
      },
      {
        title: 'Freelance Fullstack Developer',
        date: '07.2018 - 01.2019',
        company: 'Technology Development Corporation (Cámara chilena de la construcción)',
        place: 'Puerto Montt',
        url: 'cdt.cl'
      },
      {
        title: 'Development Department Head',
        date: '01.2016 - 12.2017',
        company: 'Axxezo / Patagonia Wings',
        place: 'Puerto Montt',
        url: 'axxezo.cl'
      },
      {
        title: 'Developer Freelance QT C++',
        date: '01.2016 - 12.2017',
        company: 'Patagonia Wings',
        place: 'Puerto Montt',
        url: 'patagoniawings.cl'
      },
      {
        title: 'JAVA University Teacher',
        date: '03.2014 - 07.2014',
        company: 'Technological University of Chile INACAP',
        place: 'Puerto Montt',
        url: 'inacap.cl'
      },
      {
        title: 'IT & Tech Support Department Head',
        date: '06.2013 - 01.2016',
        company: 'Innovex',
        place: 'Puerto Montt',
        url: 'innovex.cl'
      },
      {
        title: 'Fullstack Developer',
        date: '12.2012 - 05.2013',
        company: 'Innovex',
        place: 'Puerto Montt',
        url: 'innovex.cl'
      },
      {
        title: 'Fullstack Developer',
        date: '01.2012 - 11.2012',
        company: 'Singa',
        place: 'Puerto Varas',
        url: 'singa.cl'
      }
    ];
  }

}
