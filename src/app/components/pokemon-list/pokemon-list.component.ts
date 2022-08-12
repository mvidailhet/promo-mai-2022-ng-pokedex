import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonService } from 'src/app/services/pokemon.service';
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

  pokemons: Pokemon[] = this.pokemonService.pokemons;

  matchingPokemons: string[] = [];

  constructor(
    private loggingService: LoggingService,
    private pokemonService: PokemonService
  ) {
    this.loggingService.log('created pokemon list !');
  }

  ngOnInit(): void {}

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

  onPokemonNameInputChange() {
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
    this.pokemonService.addPokemon(pokemonName);

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
    this.pokemonService.deletePokemon(indexToDelete);
  }
}
