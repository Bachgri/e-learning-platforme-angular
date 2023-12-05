import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from 'src/app/Services/serv.service';
class Course {
  constructor(
    public id: number,
    public name: string,
    public professor: any,
    public image: string, // URL to the image
    public chapters: any
  ) {}
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private service: ServService, private router:Router) {}
  result!: Course[];
  result1!: Course[];
  ngOnInit(): void {
    this.getCourses();
    //this.getStudentCourses();
  }

  courseList!: Course[];

  getStudentCourses() {
    this.service.studentCourses(this.service.studentId).subscribe((res) => {
      this.result = res;
      for (const x of this.result) {
        this.removeItemByValue(x);
      }
      console.log(this.result1);
      this.courseList = this.result1;
    });
  }
  getCourses() {
    this.service.getCourses().subscribe((res) => {
      this.courseList = res;
      console.log(res)
      this.result1 = res;
      this.getStudentCourses();
    });
  }

  removeItemByValue(itemToRemove: Course) {
    const newArray: Course[] = [];
    for (const course of this.result1) {
      if (course.id !== itemToRemove.id) {
        newArray.push(course);
      }
    }
    this.result1 = newArray;
  }

  addIt(number: any) {
    /*console.log("added")
    console.log(number)
    console.log(this.service.roles)
    console.log(this.service.studentId)*/
    this.service.affectCourse(this.service.studentId, number).subscribe(() => {
      this.service.studentCourses(this.service.studentId).subscribe((res) => {
        this.result = res;
        for (const c of this.result) {
          this.removeItemByValue(c);
        }
        console.log(this.result1);
        this.courseList = this.result1;
      });
    });
  }

  check(id:number){
    this.router.navigateByUrl("/Etudiant/Course/"+id)
  }
}
