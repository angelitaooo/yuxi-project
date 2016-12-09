import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [
    new Teacher('angela', 'ordonez'),
    new Teacher('firstName', 'lastName'),
    new Teacher('firstName', 'lastName')
  ];

  constructor() { }

  getTeachers(): Teacher[] {
    return this.teachers;
  }
}
