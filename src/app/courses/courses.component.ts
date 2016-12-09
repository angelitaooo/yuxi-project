import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: UUID.UUID(),
      name: 'angular 2',
      date: '12/01/2016',
      duration: 34,
      teacher: 1
    },
    {
      id: UUID.UUID(),
      name: 'react',
      date: '12/02/2016',
      duration: 20,
      teacher: 2
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
