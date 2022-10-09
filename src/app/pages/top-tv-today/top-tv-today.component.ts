import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tv-today',
  templateUrl: './top-tv-today.component.html',
  styleUrls: ['./top-tv-today.component.css']
})
export class TopTvTodayComponent implements OnInit {
  topTvToday: string = 'Top TV Shows Today';

  constructor() { }

  ngOnInit(): void {
  }

}
