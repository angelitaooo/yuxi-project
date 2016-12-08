import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent }    from './courses.component';
import { CourseDetailComponent }  from './course-detail/course-detail.component';

const coursesRoutes: Routes = [
  { path: 'courses',  component: CoursesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
