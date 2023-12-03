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
  profid: any = sessionStorage.getItem('pid');
  chapterSelected: any = {};
  page = 1;
  pageSize = 2;
  count = 1;
  handlePageChange(event: any) {
    this.page = event;
  }
  constructor(private service: AdminProfServiceService) {}
  ngOnInit(): void {
    this.loadAll();
    this.count = this.cours.length / this.pageSize;
  }
  public setItemsPerPage(event: any) {
    this.pageSize = event;
  }
  saveCourse() {
    this.newItem.professor = { id: this.profid };
    this.service.saveCourse(this.newItem).subscribe((d) => {
      this.loadAll();
    });
  }
  loadAll() {
    this.service.getAllCourseByProf(this.profid).subscribe((d) => {
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
  public get getCourses() {
    return this.cours.filter((course: any) =>
      course.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
