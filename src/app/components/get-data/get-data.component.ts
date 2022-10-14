import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Interfaces/movies';
import { TV } from 'src/app/Interfaces/tv';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  imageUrl: string = 'https://image.tmdb.org/t/p/w185';
  movies: Movies[] = [];
  tvShows: TV[] = [];

  constructor(private getTopImages: ApiService, private router: Router) { }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
    this.getTopImages.getTopMoviesToday().subscribe((movies: any) => this.movies = movies);
    this.getTopImages.getTopTvToday().subscribe((tvShows: any) => this.tvShows = tvShows);
  }

}
