import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-course',
  templateUrl: './box-course.component.html',
  styleUrls: ['./box-course.component.scss']
})
export class BoxCourseComponent implements OnInit {
  @Input() course:any;

  constructor() { }

  ngOnInit(): void {
  }

}
