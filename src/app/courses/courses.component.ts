import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Course } from './course';
import { CourseService } from './course.service';
import { TeacherService } from '../teachers/teacher.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService, private teacherService: TeacherService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
  sortTable(sorter: string) {
    switch (sorter) {
      case 'name':
        this.courses = _.sortBy(this.courses, [(course) => course.name ]);
        break;
      case 'duration':
        this.courses = _.sortBy(this.courses, [(course) => course.duration ]);
        break;
      case 'date':
        this.courses = _.sortBy(this.courses, [(course) => course.date ]);
        break;
    }
  }
}
