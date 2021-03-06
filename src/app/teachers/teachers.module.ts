import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeachersComponent } from './teachers.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TeacherService } from './teacher.service';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [TeachersComponent, TeacherDetailComponent],
  providers: [TeacherService]
})
export class TeachersModule { }
