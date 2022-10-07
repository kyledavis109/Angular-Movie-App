import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/title.service';

@Component({
  selector: 'app-top-week',
  templateUrl: './top-week.component.html',
  styleUrls: ['./top-week.component.css']
})
export class TopWeekComponent implements OnInit {
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  images: any = [];

  constructor(private get: ApiService) { }

  getWeekImages() {
    this.get.getWeekImages().subscribe((results) => {
      this.images = results;
    })
  }

  ngOnInit(): void {
    this.getWeekImages();
  }

}
