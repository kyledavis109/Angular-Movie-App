import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Email } from '../Interfaces/email';
import { Movies } from '../Interfaces/movies';
import { TV } from '../Interfaces/tv';
import { SearchParameters } from '../Interfaces/search';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl!: string;
  apiKey!: string;
  language!: string;
  region!: string;

  constructor(private http: HttpClient) { }

  searchMovies(searchString: string): Observable<any> {
    return this.http.get('http://localhost:5000/search');
  }

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
