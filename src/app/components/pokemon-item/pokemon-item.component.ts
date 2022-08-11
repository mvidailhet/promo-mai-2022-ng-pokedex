import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;
  @Output() onDelete = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  generateColor() {
    if (!this.pokemon) return '#FFF';
    return this.pokemon?.level > 50 ? '#00dd00' : '#882222';
  }

  onDeleteClick() {
    this.onDelete.emit();
  }

}
