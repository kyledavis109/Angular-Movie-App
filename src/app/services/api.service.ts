import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Email } from '../Interfaces/email';
import { Movies } from '../Interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // API call to backend to retrieve top movies of the day's data.
  getTopMoviesToday(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:5000/topMoviesToday')
  }

  // API call to backend to retrieve top TV shows of the day's titles.
  // getTopTvTodayTitles() {
  //   return this.http.get('http://localhost:5000/topTvTodayTitles');
  // }

  // API call to backend to allow user to send email using nodemailer npm library.
  sendEmail(obj: any): Observable<Email> {
    return this.http.post<Email>('http://localhost:5000/sendEmail', obj);
  }
  
}
