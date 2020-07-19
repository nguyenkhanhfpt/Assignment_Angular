import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterCourse:number;
  courses:any = [];

  constructor(private httpClient: HttpClient) {
    this.filterCourse = 1;
  }

  changeFilter(num) {
    this.filterCourse = num;
  }

  ngOnInit(): void {
    this.httpClient.get("assets/db/Subjects.js").subscribe(data =>{
      this.courses = data;
      this.courses = this.courses.slice(0, 4);
    })
  }

}
