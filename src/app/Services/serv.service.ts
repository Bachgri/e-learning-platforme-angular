import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  accessToken: any = '';
  studentName: any;
  studentId!: number;
  roles: any;
  email: any = '';
  num!: number;
  label!: number;
  valid!: boolean;
  constructor(private Http: HttpClient) {}

  create(data: any) {
    return this.Http.post<any>(
      'http://localhost:85/Authentification/Creation',
      data
    );
  }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.Http.post<any>(
      'http://localhost:85/Authentification/Login',
      data,
      { headers }
    );
  }

  createForGoogle(data: any) {
    return this.Http.post<any>(
      'http://localhost:85/Authentification/CreationGoogle',
      data
    );
  }

  CheckGmail(data: any) {
    return this.Http.post<any>(
      'http://localhost:85/Authentification/Check',
      data
    );
  }

  Change(data: any) {
    return this.Http.put<any>(
      'http://localhost:85/Authentification/Change',
      data
    );
  }

  affectCourse(studentId: number, courseId: any) {
    // ela student kaytle3 undefined
    return this.Http.put<void>(
      `http://localhost:85/Student/affectCourse/${studentId}/${courseId}`,
      ''
    );
  }

  getCourses() {
    return this.Http.get<any>('http://localhost:85/Student/allCourses');
  }

  studentCourses(studentId: number) {
    return this.Http.get<any>(
      'http://localhost:85/Student/studentCourses/' + studentId
    );
  }

  getCourse(courseId: number) {
    return this.Http.get<any>('http://localhost:85/Student/course/' + courseId);
  }

  loadProfile(data: any) {
    //console.log(data);

    this.accessToken = data;
    console.log(this.accessToken);

    let decode: any = jwtDecode(this.accessToken);
    this.studentName = decode.sub;
    this.roles = decode.scope;
    this.studentId = decode.id;
    this.valid = decode.valid;
    window.localStorage.setItem('access-token', data);
    window.localStorage.setItem('id', decode.id);
    window.localStorage.setItem('role', decode.scope);
    console.log(this.studentName + this.roles + this.studentId);
    //console.log(this.username+" "+this.roles) chbalik
  }
}
