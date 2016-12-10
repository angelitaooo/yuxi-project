import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;
  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.teacher = this.teacherService.getTeacher(id);
    console.log(this.teacher);
  }

}
