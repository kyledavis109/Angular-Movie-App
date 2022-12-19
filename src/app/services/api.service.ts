import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Email } from '../Interfaces/email';
import { Movies } from '../Interfaces/movies';
import { TV } from '../Interfaces/tv';
// import { SearchResults } from '../Interfaces/search';
const headers = new HttpHeaders().set('Content-Type', 'application/X-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public result: any;

  constructor(private http: HttpClient) { }

  // search(item: string): Observable<any> {
  //   let searchterm = `query=${item}`;
  //   try {
  //     this.result = this.http.post('/search', searchterm, {headers});
  //     return this.result;
  //   } catch (e) {
  //     // console.log(e, 'error')
  //   }
  // }

  // API call to backend to retrieve top movies of the day's data.
  getTopMoviesToday(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:5000/topMoviesToday');
  }

  // API call to backend to retrieve top TV shows of the day's data.
  getTopTvToday(): Observable<TV[]> {
    return this.http.get<TV[]>('http://localhost:5000/topTvToday');
  }

  // API call to backend to allow user to send email using nodemailer npm library.
  sendEmail(obj: any): Observable<Email> {
    return this.http.post<Email>('http://localhost:5000/sendEmail', obj);
  }
  
}
