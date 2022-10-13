import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Interfaces/movies';

@Component({
  selector: 'app-get-images',
  templateUrl: './get-images.component.html',
  styleUrls: ['./get-images.component.css']
})
export class GetImagesComponent implements OnInit {
  imageUrl: string = 'https://image.tmdb.org/t/p/w185';
  movies: Movies[] = [];

  constructor(private getTopImages: ApiService, private router: Router) { }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
    this.getTopImages.getTopMoviesToday().subscribe((movies: any) => this.movies = movies);
  }

}
