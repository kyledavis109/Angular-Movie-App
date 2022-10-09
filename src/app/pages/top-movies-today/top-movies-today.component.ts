import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-movies-today',
  templateUrl: './top-movies-today.component.html',
  styleUrls: ['./top-movies-today.component.css']
})
export class TopMoviesTodayComponent implements OnInit {
  topMoviesToday: string = 'Top Movies Today';

  constructor() { }

  ngOnInit(): void {
  }

}
