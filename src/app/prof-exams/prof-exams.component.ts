import { Component, OnInit } from '@angular/core';
import { AdminProfServiceService } from '../admin-prof-service.service';
import { ExamsService } from '../exams.service';

@Component({
  selector: 'app-prof-exams',
  templateUrl: './prof-exams.component.html',
  styleUrls: ['./prof-exams.component.css'],
})
export class ProfExamsComponent implements OnInit {
  selectedCourse: any = {};
  cours: any = [];
  exam: any = {};
  questionAddMode = false;
  profid: any = sessionStorage.getItem('pid');
  questionAdd: any = {};
  selectedQuestion: any = {};
  responseAddMode: any = false;
  responseEditMode: any = false;
  /**
   * oeifzjd
   * zeodhiezu zioeyd
   * ouerfh
   *
   */
  responseAdd: any = {};
  //  √
  constructor(
    private service: AdminProfServiceService,
    private eService: ExamsService
  ) {}
  ngOnInit(): void {
    this.loadAll();
  }
  loadAll() {
    this.service.getAllCourseByProf(this.profid).subscribe((d) => {
      this.cours = d;
      console.log('====================================');
      console.log(this.cours);
      console.log('====================================');
    });
  }
  saveQuestion() {
    this.questionAdd.exam = { id: this.selectedCourse.exam.id };
    this.eService.saveQuestion(this.questionAdd).subscribe((d) => {
      this.loadAll();
    });
    // this.exam.ques;
  }
  saveExam() {
    this.eService.saveExam(this.exam).subscribe((d) => {
      this.selectedCourse.exam = d;
      this.service.saveCourse(this.selectedCourse).subscribe((d) => {
        this.loadAll();
      });
    });
  }
  saveResponse() {
    this.responseAdd.question = {
      id: this.selectedQuestion.id,
    };
    this.eService.saveResponse(this.responseAdd).subscribe((d) => {
      this.loadAll();
    });
  }
}
/**
 *
 *
 * Initial Chunk Files | Names   |  Raw Size
 * main.js             | main    | 188.88 kB |
 * runtime.js          | runtime |   6.52 kB |
 *
 *
 */
