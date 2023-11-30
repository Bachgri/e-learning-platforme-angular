import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  course!: Course;
  constructor(
    private router: Router,
    private hear: ActivatedRoute,
    private service: ServService
  ) {}
  ngOnInit(): void {
    this.getCourseById();
  }
  getBack() {
    this.router.navigateByUrl('/Etudiant/Courses');
  }

  getCourseById() {
    let id = this.hear.snapshot.params['id'];
    //console.log(id)
    this.service.getCourse(id).subscribe((res) => {
      this.course = res;
      console.log(this.course.chapters);
    });
  }
}
