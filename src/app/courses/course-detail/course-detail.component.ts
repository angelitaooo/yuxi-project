import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { TeacherService } from '../../teachers/teacher.service';
import { Teacher } from '../../teachers/teacher';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  teachers: Teacher[];
  newCourseName: string;
  newCourseDate: string;
  newCourseDuration: number;
  newCourseTeacher: string;
  isCreating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private teacherService: TeacherService
) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // Bring a course created or an empty one
    this.course = this.courseService.getCourse(id);
    this.teachers = this.teacherService.getTeachers();

    // tell the template if we are creating or not
    if (!this.course.id) {
      this.isCreating = true;
      this.router.navigateByUrl('/courses/new');
    }

    // copying course name, date, duration, and teacher into the new variables
    this.newCourseName = this.course.name;
    this.newCourseDate = this.course.date;
    this.newCourseDuration = this.course.duration;
    this.newCourseTeacher = this.course.teacher;
  }

  formSubmit(event, courseForm) {
    // don't let the submit event reload the page
    event.preventDefault();
    // Update values in original course object
    this.course.name = courseForm.value.courseName;
    this.course.date = courseForm.value.startingDate;
    this.course.duration = courseForm.value.duration;
    this.course.teacher = courseForm.value.teacher;

    // Service add the course
    this.courseService.addCourse(this.course);

    // redirect
    this.router.navigateByUrl('/courses');
  }


}
