import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
