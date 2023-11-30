import { Component, OnInit } from '@angular/core';
import { AdminProfServiceService } from '../admin-prof-service.service';

@Component({
  selector: 'app-prof-cours',
  templateUrl: './prof-cours.component.html',
  styleUrls: ['./prof-cours.component.css'],
})
export class ProfCoursComponent implements OnInit {
  cours: any = [];
  searchText = '';
  newItem: any = {};
  edited: any = {};
  chapterSelected: any = {};
  constructor(private service: AdminProfServiceService) {}
  ngOnInit(): void {
    this.loadAll();
  }
  saveCourse() {
    this.service.saveCourse(this.newItem).subscribe((d) => {
      this.loadAll();
    });
  }
  loadAll() {
    this.service.getAllCourse().subscribe((d) => {
      this.cours = d;
      console.log('====================================');
      console.log(this.cours);
      console.log('====================================');
    });
  }
  saveChapter(ch: any) {
    // console.log(this.edited);
    let course: any = {};
    course.id = this.edited.id;
    this.chapterSelected.course = course;
    console.log('====================================');
    console.log(this.chapterSelected);
    console.log('====================================');
    this.service.saveChapter(this.chapterSelected).subscribe((d) => {
      this.loadAll();
      this.loadSelected(this.edited);
    });
  }
  loadSelected(edited: any) {
    this.service.getCourse(edited.id).subscribe((d) => (edited = d));
  }
}
