import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent }    from './teachers.component';
import { TeacherDetailComponent }  from './teacher-detail/teacher-detail.component';

const teachersRoutes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(teachersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeachersRoutingModule { }
