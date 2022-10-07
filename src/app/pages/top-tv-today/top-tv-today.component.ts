import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-tv-today',
  templateUrl: './top-tv-today.component.html',
  styleUrls: ['./top-tv-today.component.css']
})
export class TopTvTodayComponent implements OnInit {
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  images: any = [];

  constructor(private get: ApiService) { }

  // Interacts with ApiService to retrieve top TV shows of the day's poster images.
  getImages() {
    this.get.getTopTvTodayImages().subscribe((results) => {
      this.images = results;
    })
  }

  ngOnInit(): void {
    this.getImages();
  }

}
