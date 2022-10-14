import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-tile',
  templateUrl: './display-tile.component.html',
  styleUrls: ['./display-tile.component.css']
})
export class DisplayTileComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
