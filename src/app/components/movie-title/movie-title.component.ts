import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  movieTitle: any;

  constructor(private get: TitleService) { }

  ngOnInit(): void {
    this.get.showTitle().subscribe((value) => (this.movieTitle = value))
  }
  
}
