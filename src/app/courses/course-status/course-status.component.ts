import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as moment  from 'moment';

@Component({
  selector: 'app-course-status',
  templateUrl: './course-status.component.html',
  styleUrls: ['./course-status.component.css']
})
export class CourseStatusComponent implements OnInit, OnChanges {

  color: string = '';

  @Input() date: string;
  constructor() { }

  ngOnChanges() {
    this.getDifference();
  }

  ngOnInit() {
  }

  getDifference() {
    const today = moment();
    const date = moment(this.date, 'YYYY-MM-DD');
    const result = date.diff(today, 'days');
    if (result > 30) {
      this.color = 'success';
    }
    if (result <= 30 && result >= 0) {
      this.color = 'warning';
    }
    if (result < 0 ) {
      this.color = 'alert';
    }
  }

}
