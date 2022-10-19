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
  searchParameters!: HttpParams;
  addParams: any = '';

  constructor(private http: HttpClient) { }

  searchMovie(queryParams: SearchParameters): Observable<Object> {
    this.searchParameters = new HttpParams();
    this.addParams(queryParams);
    return this.http.get('http://localhost:5000/search')
  }


  addParameters(queryParams: SearchParameters) {
    // this.searchParameters = this.searchParameters.set('api_key', config['api-key']);
    this.searchParameters = this.searchParameters.set('language', 'en-US');
    this.verifyAndAddToParams('query', queryParams.searchQuery);
    this.verifyAndAddToParams('include_adult', queryParams.adult);
    this.verifyAndAddToParams('page', queryParams.page);
  }

  private verifyAndAddToParams(key: any, value: any)
  {
    if (typeof value !== 'undefined') {
      if (typeof value !== 'string') {
        this.searchParameters = this.searchParameters.set(key, String(value));
      } else {
        this.searchParameters = this.searchParameters.set(key, value);
      }
    }
  }

  // API call to backend to retrieve top movies of the day's data.
  getTopMoviesToday(): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://localhost:5000/topMoviesToday')
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
