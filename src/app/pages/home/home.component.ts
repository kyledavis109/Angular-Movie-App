import { Component, OnInit } from '@angular/core';
import { SearchResults } from 'src/app/Interfaces/search';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchResults: SearchResults[] = [];
  searchRes: any;
  searchStr!: string;
  totalResults!: any;
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';

  constructor(private search: ApiService, private router: Router) { }

  // searchMovies() {
  //   this.search.searchMovies(this.searchStr).subscribe((res: any) => {
  //     this.searchRes = res.results;
  //   })
  // }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {
  }

}
