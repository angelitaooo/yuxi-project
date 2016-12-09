import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from './course.service';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  declarations: [CoursesComponent, CourseDetailComponent],
  providers: [CourseService]
})
export class CoursesModule { }
