import { Injectable } from '@angular/core';
import { Course } from './course';
import { UUID } from 'angular2-uuid';

@Injectable()
export class CourseService {
  courses: Course[] = [];

  constructor() { }
  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: string) {
    let result: Course;
    const searchResult = this.courses.filter((course: Course) => {
      if (course.id === id) {
        return course;
      }
    });

    // if search result is empty return a new course with no data
    if (!searchResult.length) {
      result = new Course ('', '', '', 0 , '');
    } else {
      // Return the specific course
      result = searchResult[0];
    }
    return result;
  }

  addCourse(course: Course) {
    // if the course doesnt have an index it means that we are creating a course
    if (!course.id) {
      course.id = UUID.UUID();
      this.courses.push(course);
    } else {
      // editing course
      let courseIndex;
      // I need to find the index of the edited course
      this.courses.forEach((c, index) => {
        if (course.id === c.id) {
         courseIndex = index;
        }
      });
      // Editing
      // Replace in array -> https://appendto.com/2016/04/insert-remove-replace-elements-array-splice/
      this.courses.splice(courseIndex, 1, course);
    }
  }

}
