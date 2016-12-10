import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [
    new Teacher(UUID.UUID(), 'angela', 'ordonez'),
    new Teacher(UUID.UUID(), 'firstName', 'lastName'),
    new Teacher(UUID.UUID(), 'firstName', 'lastName')
  ];

  constructor() { }

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  getTeacher(id: string) {
    let result: Teacher;
    const searchResult = this.teachers.filter((teacher: Teacher) => {
      if (teacher.id === id) {
        return teacher;
      }
    });

    if (!searchResult.length) {
      result = new Teacher('', '', '');
    } else {
      result = searchResult[0];
    }

    return result;
  }
}
