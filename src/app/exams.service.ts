import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  constructor(private http: HttpClient) {}
  saveQuestion(q: any): Observable<any[]> {
    return this.http.post<any>('http://localhost:85/prof/questions', q);
  }
  saveResponse(q: any): Observable<any[]> {
    return this.http.post<any>('http://localhost:85/prof/responses', q);
  }

  saveExam(q: any): Observable<any[]> {
    return this.http.post<any>('http://localhost:85/prof/exams', q);
  }
}
