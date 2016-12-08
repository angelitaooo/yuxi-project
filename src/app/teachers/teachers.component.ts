import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers = [
    {
      id: 1,
      firstName: 'Angela',
      lastName: 'Ordonez'
    },
    {
      id: 2,
      firstName: 'alejandro',
      lastName: 'nanez'
    },
    {
      id: 3,
      firstName: 'mapale',
      lastName: 'wayne'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
