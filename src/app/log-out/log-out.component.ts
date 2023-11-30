import { Component, OnInit } from '@angular/core';
import { ServService } from '../Services/serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css'],
})
export class LogOutComponent implements OnInit {
  constructor(private service: ServService, private router: Router) {}
  ngOnInit() {
    window.localStorage.clear();
    this.service.accessToken = undefined;
    this.service.roles = undefined;
    this.service.studentId = NaN;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    sessionStorage.clear();
    this.router.navigateByUrl('/Login');
  }
}
