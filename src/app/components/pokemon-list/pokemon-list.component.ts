import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { LoggingService } from 'src/app/services/logging.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonInputValue: string | undefined;
  wasPokemonAdded = false;
  wasBadWordWritten = false;

  pokemons: Pokemon[] = [];

  matchingPokemons: string[] = [];

  constructor(private loggingService: LoggingService) {
    this.loggingService.log('created pokemon list !');
    this.getPokemons();
  }

  ngOnInit(): void {}

  getPokemons() {
    const pokemonsString = localStorage.getItem('pokemons');
    if (pokemonsString) {
      this.pokemons = JSON.parse(pokemonsString);
    }
  }

  savePokemons(pokemons: Pokemon[]) {
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
    this.matchingPokemons = this.getMatchingPokemons(
      this.pokemonInputValue,
      this.pokedex
    );
  }

  pokedex = ['bulbizarre', 'herbizarre', 'florizarre', 'carapuce'];

  getMatchingPokemons(inputText: string, pokedex: string[]): string[] {
    return pokedex.filter((pokemon) => pokemon.includes(inputText));
  }

  addPokemonToPokemons(pokemonName: string) {
    const pokemon: Pokemon = {
      name: pokemonName,
      level: Utils.random(1, 100),
    };

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

  onPokemonDelete(indexToDelete: number) {
    this.pokemons.splice(indexToDelete, 1);
  }
}
