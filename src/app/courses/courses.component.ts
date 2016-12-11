import { Component, OnInit } from '@angular/core';
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

}
