import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:any;
  courseSearch:any;
  valueSearch:string;

  constructor(private httpClient: HttpClient) {
  }

  searchTest(event) {
    this.valueSearch = event.target.value;

    this.courses = this.courseSearch.filter(item => {
      let patt = new RegExp(this.valueSearch, 'i');
      if(patt.test(item.Name)) {
        return item;
      }
    });
  }

  ngOnInit(): void {
    this.httpClient.get("assets/db/Subjects.js").subscribe(data =>{
      this.courses = data;
      this.courseSearch = data;
    })
  }

}
