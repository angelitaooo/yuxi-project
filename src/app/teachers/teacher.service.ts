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

  addTeacher(teacher: Teacher) {
    // Creating
    if (!teacher.id) {
      teacher.id = UUID.UUID();
      this.teachers.push(teacher);
    } else {
      let teacherIndex;

      this.teachers.forEach((t, index) => {
        if (teacher.id === t.id) {
          teacherIndex = index;
        }
      });

      this.teachers.splice(teacherIndex, 1, teacher);
    }
  }
}
