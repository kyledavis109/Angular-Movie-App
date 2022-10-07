import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getTitles() {
  //   return this.http.get('http://localhost:5000/titles');
  // }

  // API call to backend to retrieve top TV shows of the day's poster images.
  getTopTvTodayImages() {
    return this.http.get('http://localhost:5000/dayImages');
  }

  // API call to backend to retrieve top movies of the day's poster images.
  getTopMoviesTodayImages() {
    return this.http.get('http://localhost:5000/topMoviesTodayImages');
  }
  
}
