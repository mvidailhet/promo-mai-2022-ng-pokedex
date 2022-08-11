import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() name: string | undefined;
  level = Utils.random(1, 100);

  constructor() {

  }

  ngOnInit(): void {
  }

  generateColor() {
    return this.level > 50 ? '#00dd00' : '#882222';
  }

}
