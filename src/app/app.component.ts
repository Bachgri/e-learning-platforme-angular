import { Component, OnInit } from '@angular/core';
import { ServService } from './Services/serv.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PlatFront';
  constructor(private Service: ServService) {}
  ngOnInit(): void {
    if (
      this.Service.studentId == undefined &&
      window.localStorage.getItem('id') != null
    ) {
      this.Service.studentId = Number.parseInt(
        window.localStorage.getItem('id')!
      );
      this.Service.roles = window.localStorage.getItem('roles');
      this.Service.accessToken = window.localStorage.getItem('access-token');
    }
    console.log(this.Service.accessToken);
  }
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
