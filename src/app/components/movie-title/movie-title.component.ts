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
  movieImage: any = 'https://image.tmdb.org/t/p/w200';
  // movieImageUrl: any;
  // imageToShow: any;
  // isImageLoading!: boolean;
  // noImageFound: any;

  constructor(private get: TitleService) { }

  ngOnInit(): void {
    this.get.getTitle().subscribe((value) => (this.movieTitle = value));
    this.get.getImage().subscribe((value) => (this.movieImage = this.movieImage + value));
  }
  
}
