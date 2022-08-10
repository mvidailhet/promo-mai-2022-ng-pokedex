import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonInputValue: string | undefined;
  wasPokemonAdded = false;
  wasBadWordWritten = false;

  pokemons: string[] = [];

  constructor() {
    this.getPokemons();
  }

  ngOnInit(): void {

  }

  getPokemons() {
    const pokemonsString = localStorage.getItem('pokemons');
    if (pokemonsString) {
      this.pokemons = JSON.parse(pokemonsString);
    }
  }

  savePokemons(pokemons: string[]) {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }

  onAddPokemonClick() {

    if (!this.pokemonInputValue) return;

    const badWords = ['con', 'debile'];
    if (badWords.includes(this.pokemonInputValue)) {
      this.wasBadWordWritten = true;

      setTimeout(() => {
        this.wasBadWordWritten = false;
      }, 3000);

      return;
    }

    this.pokemons.push(this.pokemonInputValue);

    this.savePokemons(this.pokemons);

    this.pokemonInputValue = '';
    this.wasPokemonAdded = true;


    setTimeout(() => {
      this.wasPokemonAdded = false;
    }, 3000);


  }

  onPokemonNameInputChange(event: Event) {
    //const inputElt = event.target as HTMLInputElement;
    //this.pokemonName = inputElt.value;

  }

}
