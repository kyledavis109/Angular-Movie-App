import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-images',
  templateUrl: './get-images.component.html',
  styleUrls: ['./get-images.component.css']
})
export class GetImagesComponent implements OnInit {
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  images: any = [];
  topTvToday: string = 'Top TV Shows Today';
  topMoviesToday: string = 'Top Movies Today';

  constructor(private getTopImages: ApiService, private router: Router) { }

  // Interacts with ApiService to retrieve top TV shows of the day's poster images.
  getTvImages() {
    this.getTopImages.getTopTvTodayImages().subscribe((results) => {
      this.images = results;
    })
  }

  // Interacts with ApiService to retrieve top movies of the day's poster images.
  getMovieImages() {
    this.getTopImages.getTopMoviesTodayImages().subscribe((results) => {
      this.images = results;
    })
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
    this.getMovieImages();
    this.getTvImages();
  }

}
