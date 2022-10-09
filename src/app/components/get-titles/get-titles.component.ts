import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-titles',
  templateUrl: './get-titles.component.html',
  styleUrls: ['./get-titles.component.css']
})
export class GetTitlesComponent implements OnInit {
  title: string = '';

  constructor(private getTopImages: ApiService) { }

  getTitles() {
    
  }

  ngOnInit(): void {
  }

}
