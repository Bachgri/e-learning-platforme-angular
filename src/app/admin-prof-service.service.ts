import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminProfServiceService {
  constructor(private http: HttpClient) {}
  getAllProfs(): Observable<any[]> {
    return this.http.get<any>('http://localhost:85/admin/profs');
  }

  getAllCourse(): Observable<any[]> {
    return this.http.get<any>('http://localhost:85/Student/allCourses');
  }
  getAllCourseByProf(id: any): Observable<any[]> {
    return this.http.get<any>(`http://localhost:85/Student/allCourses/${id}`);
  }
  getCourse(id: any): Observable<any[]> {
    return this.http.get<any>(`http://localhost:85/Student/course/${id}`);
  }
  add(e: any): Observable<any> {
    return this.http.post<any>('http://localhost:85/Authentification/prof', e);
  }
  inscriptions(): Observable<any> {
    return this.http.get(`http://localhost:85/admin/inscriptions`);
  }
  addProf(prof: any): Observable<any> {
    return this.http.post(`http://localhost:85/admin/profs`, prof);
  }
  saveChapter(ch: any): Observable<any> {
    return this.http.post(`http://localhost:85/Student/chapters`, ch);
  }
  saveCourse(c: any): Observable<any> {
    return this.http.post(`http://localhost:85/Student/courseCreation`, c);
  }
  editStudent(s: any): Observable<any> {
    return this.http.post(`http://localhost:85/admin/validate`, s);
  }
  /**
   * 
   * { 
        "password": "159159159951951951",
        "email": "Oualid0bachgri.01@gmail.com",
        "fullName": "Oualid0",
        "role": {
            "id": 2
        }
    }
   */
}
