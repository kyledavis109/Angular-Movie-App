import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { SearchResults } from 'src/app/Interfaces/search';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  // searchResults: SearchResults[] = [];
  searchString!: string;
  totalResults!: any;
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';

  constructor(private search: ApiService) { }

  ngOnInit(): void {
  }

}
