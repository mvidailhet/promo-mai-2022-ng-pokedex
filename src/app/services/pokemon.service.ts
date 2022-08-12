import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _pokemons: Pokemon[] = [];
  public get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  constructor() {
    this.loadPokemons();
  }

  private loadPokemons() {
    const pokemonsString = localStorage.getItem('pokemons');
    if (pokemonsString) {
      this._pokemons = JSON.parse(pokemonsString);
    }
  }

  savePokemons(pokemons: Pokemon[]) {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }

  deletePokemon(indexToDelete: number) {
    this.pokemons.splice(indexToDelete, 1);
  }

  addPokemon(pokemonName: string) {
    const pokemon: Pokemon = {
      name: pokemonName,
      level: Utils.random(1, 100),
    };

    this.pokemons.push(pokemon);
    this.savePokemons(this.pokemons);
  }


}
