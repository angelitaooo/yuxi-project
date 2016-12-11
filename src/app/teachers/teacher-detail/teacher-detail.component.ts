import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;
  newTeacherFirstName: string;
  newTeacherLastName: string;
  isCreating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // Bring a teacher created or an empty one
    this.teacher = this.teacherService.getTeacher(id);

    // tell the template if we are creating or not
    if (!this.teacher.id) {
      this.isCreating = true;
      this.router.navigateByUrl('/teachers/new');
    }

    // copying teacher first name and last name into the new  variables
    this.newTeacherFirstName = this.teacher.firstName;
    this.newTeacherLastName = this.teacher.lastName;
  }

  formSubmit(event, teacherForm) {
    // don't let the submit event reload the page
    event.preventDefault();
    // Update values in existing teacher object
    this.teacher.firstName = teacherForm.value.firstName;
    this.teacher.lastName = teacherForm.value.lastName;

    // Service add the teacher
    this.teacherService.addTeacher(this.teacher);

    // redirect
    this.router.navigateByUrl('/teachers');
  }

}
