import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private http: HttpClient) { }

  getTitle() {
    return this.http.get('http://localhost:5000/title');
  }

  getImage() {
    return this.http.get('http://localhost:5000/image');
  }
}
