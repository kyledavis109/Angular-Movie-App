import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-movies-today',
  templateUrl: './top-movies-today.component.html',
  styleUrls: ['./top-movies-today.component.css']
})
export class TopMoviesTodayComponent implements OnInit {
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  images: any = [];

  constructor(private get: ApiService) { }

  // Interacts with ApiService to retrieve top movies of the day's poster images.
  getImages() {
    this.get.getTopMoviesTodayImages().subscribe((results) => {
      this.images = results;
    })
  }

  ngOnInit(): void {
    this.getImages();
  }

}
