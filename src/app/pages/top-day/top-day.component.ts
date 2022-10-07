import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/title.service';

@Component({
  selector: 'app-top-day',
  templateUrl: './top-day.component.html',
  styleUrls: ['./top-day.component.css']
})
export class TopDayComponent implements OnInit {
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  images: any = [];

  constructor(private get: ApiService) { }

  getDayImages() {
    this.get.getWeekImages().subscribe((results) => {
      this.images = results;
    })
  }

  ngOnInit(): void {
    this.getDayImages();
  }

}
