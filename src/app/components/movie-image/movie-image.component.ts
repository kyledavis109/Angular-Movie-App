import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-movie-image',
  templateUrl: './movie-image.component.html',
  styleUrls: ['./movie-image.component.css']
})
export class MovieImageComponent implements OnInit {
  movieTitle: any;

  constructor(private get: TitleService) { }

  ngOnInit(): void {
    this.get.showTitle().subscribe((value) => (this.movieTitle = value))
  }

}
