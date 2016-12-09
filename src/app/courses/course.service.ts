import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseService {
  courses: Course[] = [
    new Course('angular', '24/01/2017', 20, 3),
    new Course('react', '6/01/2017', 20, 3),
    new Course('jquery', '17/01/2017', 20, 3),
  ];

  constructor() { }
  getCourses(): Course[] {
    return this.courses;
  }
}
