import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  id:string;
  questions:any = [];
  questionIndex:number = 0;

  constructor(private route: ActivatedRoute,
      private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(`assets/db/Quizs/${this.id}.js`).subscribe(data =>{
      console.log(data);
      this.questions = data;
    })
  }

  nextQuestion() {
    this.questionIndex += 1;
  }

  previousQuestion() {
    if(this.questionIndex == 0) {
      return;
    }
    
    this.questionIndex -= 1;
  }

}
