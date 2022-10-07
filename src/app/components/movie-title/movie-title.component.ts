import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  movieTitle: any;
  movieImageUrl: string = 'https://image.tmdb.org/t/p/w200';
  // movieImages: any={};
  movieImage: any;
  // imageToShow: any;
  // isImageLoading!: boolean;
  // noImageFound: any;
  // images: Array<{value: string}> = [];
  images: any = [];
  titles: any = [];
  noData: any;
  // results = [];

  constructor(private get: TitleService) { }

  getImages() {
    this.get.getWeekImages().subscribe((results) => {
      this.images = results;
    })
  }

  getTitles() {
    this.get.getTitles().subscribe((results) => {
      this.titles = results;
    })
  }

  ngOnInit(): void {
    this.getTitles()
    this.getImages()
  }
  
}
