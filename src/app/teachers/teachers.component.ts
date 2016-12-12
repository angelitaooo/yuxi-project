import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }
  sortTable(sorter: string) {
    switch (sorter) {
      case 'firstName':
        this.teachers = _.sortBy(this.teachers, [(teacher) => teacher.firstName ]);
        break;
      case 'lastName':
        this.teachers = _.sortBy(this.teachers, [(teacher) => teacher.lastName ]);
        break;
    }
  }
}
