import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterCourse:number;
  constructor() {
    this.filterCourse = 1;
  }

  changeFilter(num) {
    this.filterCourse = num;
  }

  ngOnInit(): void {
  }

}
