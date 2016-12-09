import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers = [
    {
      id: UUID.UUID(),
      firstName: 'Angela',
      lastName: 'Ordonez'
    },
    {
      id: UUID.UUID(),
      firstName: 'alejandro',
      lastName: 'nanez'
    },
    {
      id: UUID.UUID(),
      firstName: 'mapale',
      lastName: 'wayne'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
