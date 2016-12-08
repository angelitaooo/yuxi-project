import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: 1,
      name: 'angular 2',
      date: '12/01/2016',
      duration: 34,
      teacher: 1
    },
    {
      id: 2,
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
