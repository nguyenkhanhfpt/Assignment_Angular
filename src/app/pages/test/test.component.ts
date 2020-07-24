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

  answers:any = {};
  answerId:number;
  answerChoice:number;
  mark:number;

  constructor(private route: ActivatedRoute,
      private httpClient: HttpClient) {
        this.mark = 0;
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

    this.answers[this.answerId] = this.answerChoice;

    this.answerId = 0;
    this.answerChoice = null;

    console.log(this.answers);
  }

  previousQuestion() {
    if(this.questionIndex == 0) {
      return;
    }
    
    this.questionIndex -= 1;
  }

  getAnswer(answerId, choice) 
  {
      this.answerId = answerId;
      this.answerChoice = choice;
      console.log(`Cau tra loi la: ${answerId}, va ban chon: ${choice}`);
  }

  finshTest()
  {
    for(let answer in this.answers) {
      if(answer == this.answers[answer]) {
        this.mark += 1;
      }
    }
    console.log(`Tong diem cua ban la: ${this.mark}`);
  }

}
