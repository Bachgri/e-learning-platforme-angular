import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/Services/serv.service';
class Course {
  constructor(
    public name: string,
    public profession: string,
    public image: string // URL to the image
  ) {}
}
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit{
  constructor(private service : ServService){}
  courseList : any
  ngOnInit(): void {
    this.service.studentCourses(this.service.studentId).subscribe(res=>this.courseList=res)
  }





  

  

  
}
