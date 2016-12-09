import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ],
  declarations: [TeachersComponent, TeacherDetailComponent]
})
export class TeachersModule { }