import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { SearchParameters } from 'src/app/Interfaces/search';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  imageUrl: string = 'https://image.tmdb.org/t/p/w185';
  // searchResults: Search[] = [];
  // searchForm!: FormGroup;
  // showSearchForm: boolean = true;
  // public subscription!: Subscription;

  constructor(private getSearchResults: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
