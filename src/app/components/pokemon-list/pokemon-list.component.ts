import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  //pokemonName: string | undefined;
  pokemonInputValue: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  onAddPokemonClick() {
    this.pokemonInputValue = '';
  }

  onPokemonNameInputChange(event: Event) {
    //const inputElt = event.target as HTMLInputElement;
    //this.pokemonName = inputElt.value;

  }

}
