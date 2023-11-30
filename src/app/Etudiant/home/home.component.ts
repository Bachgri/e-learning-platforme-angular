import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,

  OnInit,
 
} from '@angular/core';
import { navbarData } from './data';
import { CoursesComponent } from '../courses/courses.component';
import { ServService } from 'src/app/Services/serv.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

class Course {
  constructor(
    public name: string,
    public profession: string,
    public image: string // URL to the image
  ) {}
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})


export class HomeComponent implements OnInit {

  navData = navbarData;
  courseList: Course[] = [
    new Course('Course 1', 'Professor A', 'https://example.com/image1.jpg'),
    new Course('Course 2', 'Professor B', 'https://example.com/image2.jpg'),
    new Course('Course 1', 'Professor A', 'https://example.com/image1.jpg'),
    new Course('Course 2', 'Professor B', 'https://example.com/image2.jpg'),
    new Course('Course 1', 'Professor A', 'https://example.com/image1.jpg'),
    new Course('Course 2', 'Professor B', 'https://example.com/image2.jpg'),
    new Course('Course 1', 'Professor A', 'https://example.com/image1.jpg'),
    new Course('Course 2', 'Professor B', 'https://example.com/image2.jpg'),
    new Course('Course 1', 'Professor A', 'https://example.com/image1.jpg'),
    new Course('Course 2', 'Professor B', 'https://example.com/image2.jpg'),
    // Add more courses as needed
  ];

  label !: number
  collapsed=false;
  screenWidth=0
  constructor(private service:ServService){}


  

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
    if(!window.localStorage.getItem("page")){
      this.label = 1
      console.log("here")
    }else{
      this.label = Number.parseInt(window.localStorage.getItem("page")!)
    }
    
    if(!this.label){this.label=1}
    console.log(this.label)
  }
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
 


}