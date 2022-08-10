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

  matchingPokemons: string[] = [];

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

    this.addPokemonToPokemons(this.pokemonInputValue);
  }

  onPokemonNameInputChange(event: Event) {
    this.matchingPokemons = [];
    if (!this.pokemonInputValue) return;
    this.matchingPokemons = this.getMatchingPokemons(this.pokemonInputValue, this.pokedex);
  }

  pokedex = ['bulbizarre', 'herbizarre', 'florizarre', 'carapuce'];

  getMatchingPokemons(inputText: string, pokedex: string[]): string[] {
    return pokedex.filter(pokemon => pokemon.includes(inputText));
  }

  addPokemonToPokemons(pokemon: string) {
    this.pokemons.push(pokemon);
    this.savePokemons(this.pokemons);
    this.pokemonInputValue = '';
    this.wasPokemonAdded = true;
    this.matchingPokemons = [];

    setTimeout(() => {
      this.wasPokemonAdded = false;
    }, 3000);
  }

  matchingPokemonClick(matchingPokemon: string) {
    this.addPokemonToPokemons(matchingPokemon);
  }

}
