import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersRoutingModule } from './teachers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule
  ],
  declarations: [TeachersComponent, TeacherDetailComponent]
})
export class TeachersModule { }
