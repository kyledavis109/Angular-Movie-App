import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-titles',
  templateUrl: './get-titles.component.html',
  styleUrls: ['./get-titles.component.css']
})
export class GetTitlesComponent implements OnInit {
  tvTitles: any = [];
  movieTitles: any = [];

  constructor(private getTopTitles: ApiService) { }

  // Interacts with ApiService to retrieve top TV shows of the day's titles.
  getTvTitles() {
    this.getTopTitles.getTopTvTodayTitles().subscribe((results) => {
      this.tvTitles = results
    })
  }

  // Interacts with ApiService to retrieve top movies of the day's titles.
  getMovieTitles() {
    this.getTopTitles.getTopMoviesTodayTitles().subscribe((results) => {
      this.movieTitles = results
    })
  }

  ngOnInit(): void {
    this.getTvTitles();
    this.getMovieTitles();
  }

}