import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  isAddButtonDisabled = false;

  constructor() { }

  ngOnInit(): void {

  }

  onAddPokemonClick() {
    this.isAddButtonDisabled = !this.isAddButtonDisabled;
  }

}
