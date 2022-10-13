import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Interfaces/movies';

@Component({
  selector: 'app-top-movies-today',
  templateUrl: './top-movies-today.component.html',
  styleUrls: ['./top-movies-today.component.css']
})
export class TopMoviesTodayComponent implements OnInit {
  topMoviesToday: string = 'Top Movies Today';
  imageUrl: string = 'https://image.tmdb.org/t/p/w185';
  movies: Movies[] = [];

  constructor(private getTopImages: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getTopImages.getTopMoviesTodayImages().subscribe((movies: any) => this.movies = movies);
    console.log('movies', this.movies)
  }

  // ngDoCheck() {
  //   this.getTopImages.getTopMoviesTodayImages().subscribe((movies: any) => this.movies = movies);
  //   console.log('movies', this.movies)
  // }

}
