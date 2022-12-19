import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Interfaces/movies';
import { TV } from 'src/app/Interfaces/tv';
// import { SearchResults } from 'src/app/Interfaces/search';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';
  movies: Movies[] = [];
  tvShows: TV[] = [];
  // searchResults: SearchResults[] = [];
  public search: string = '';
  totalResults!: any;

  constructor(private getTopImages: ApiService, private router: Router) { }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  // searchInput(search: string) {
  //   this.getTopImages.searchMovies(search).subscribe((res: any) => {
  //     this.searchResults = res.results;
  //   })
  // }

  ngOnInit(): void {
    this.getTopImages.getTopMoviesToday().subscribe((movies: any) => this.movies = movies);
    this.getTopImages.getTopTvToday().subscribe((tvShows: any) => this.tvShows = tvShows);
  }

}
