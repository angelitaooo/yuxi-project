import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent, CourseDetailComponent]
})
export class CoursesModule { }
