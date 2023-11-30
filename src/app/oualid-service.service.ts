import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OualidServiceService {
  constructor(private http: HttpClient) {}

  loadNaves(role: any): Observable<any> {
    return this.http.get(
      `http://localhost:85/api/items/${role}`
      // , {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     Authorization: 'Bearer' + sessionStorage.getItem('token'),
      //   }),
      //   responseType: 'json',
      // }
    );
  }
}
