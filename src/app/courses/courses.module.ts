import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from './course.service';
import { CourseStatusComponent } from './course-status/course-status.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [CoursesComponent, CourseDetailComponent, CourseStatusComponent],
  providers: [CourseService]
})
export class CoursesModule { }
