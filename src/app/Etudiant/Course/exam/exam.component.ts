import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServService } from 'src/app/Services/serv.service';
interface ExamQuestion {
  id: number;
  label: string;
  responses: ExamResponse[];
  note: string;
}

interface ExamResponse {
  id: number;
  label: string;
  correct: boolean;
}

interface UserAnswer {
  questionId: number;
  responseId: number;
}
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{
  constructor(private service:ServService, private hear:ActivatedRoute){

  }
  result : any
  id!:number

  
  // Variable to store user answers
  userAnswers: { [questionId: number]: number } = {};

  // Variable to store total score
  totalScore = 0;
  ngOnInit(): void {
     this.hear.params.subscribe(res => {
      this.id = Number.parseInt(res['id']); 
      this.loadExam()
     })

     
  }

  loadExam(){
   this.service.getExam(this.id).subscribe( {
    next : res=>{console.log(res); this.result = res},
    error : err=> console.log(err)
   })
  }
  handleSubmission() {
    // Reset total score
    this.totalScore=0;
    //console.log(this.result.questions)
    this.result.questions.forEach((question: any) => {
      
      const userResponse = question.responses.find((response: any) => response.id == this.userAnswers[question.id]);
      //console.log(userResponse)
      if(userResponse.correct){
        this.totalScore += Number.parseInt(question.note)
      }
    });
   console.log(this.totalScore)
   this.setNote(this.service.studentId,this.id,this.totalScore);
   
  }
  allQuestionsAnswered(): boolean {
    // Check if all questions have been answered
    const questionIds = this.result.questions.map((question : any)=> question.id);
    return questionIds.every((questionId : number)=> this.userAnswers[questionId] != undefined);
  }
  setNote(idS:number, idC:number, note:number){
    this.service.setNote(idS, idC, note).subscribe({
      next : res=> console.log(res),
      error : err=>console.log(err)
    })
  }
}
