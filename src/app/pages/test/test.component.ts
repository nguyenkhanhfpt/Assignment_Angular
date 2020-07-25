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
  finish: boolean = false;
  time: number= 65;
  countTime: any;

  answers:any = {};
  answerId:number;
  answerChoice:number;
  mark:number;

  constructor(
      private route: ActivatedRoute,
      private httpClient: HttpClient
    ) 
  {
      this.mark = 0;
  }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(`assets/db/Quizs/${this.id}.js`).subscribe(data =>{
      this.questions = data;   // get all questions 
    });

    this.countTime = setInterval(() => {
      if (this.time == 0) {
        alert('Bài test của bạn đã kết thúc');
        this.finshTest();
        return;
      }
      this.time -= 1;
    }, 1000);
  }

  ngOnDestroy(event): void
  {
      clearInterval(this.countTime);
  }

  // tính thời gian bài test
  calculatorTime() {
    if (this.time <= 60) {
      return `${this.time} giây`;
    } else {
      let minutes = Math.floor(this.time / 60);
      let seconds = this.time % (minutes * 60); 
      return `${minutes} phút ${seconds} giây`;
    }
  }

  // đi tới câu hỏi tiếp theo
  nextQuestion() {
    this.questionIndex += 1;

    this.answers[this.answerId] = this.answerChoice;

    this.answerId = 0;
    this.answerChoice = null;
  }

  // quay lại câu hỏi trước
  previousQuestion() {
    if(this.questionIndex == 0) {
      return;
    }
    
    this.questionIndex -= 1;
  }

  // Lấy thông tin câu trả lời
  getAnswer(answerId, choice) 
  {
      this.answerId = answerId;
      this.answerChoice = choice;
      console.log(`Cau tra loi la: ${answerId}, va ban chon: ${choice}`);
  }

  // Hoàn thành bài test
  finshTest()
  {
    for(let answer in this.answers) {
      if(answer == this.answers[answer]) {
        this.mark += 1;
      }
    }
    console.log(`Tong diem cua ban la: ${this.mark}`);

    clearInterval(this.countTime);

    this.finish = true;
  }

}
