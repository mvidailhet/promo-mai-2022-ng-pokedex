import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonResult } from 'src/app/models/api-results/pokemon';
import {
  PokemonsResult,
  SimplePokemon,
} from 'src/app/models/api-results/pokemons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.initPokemons();
  }

  initPokemons() {
    this.apiService.getPokemons().subscribe(async (pokemonsResult: PokemonsResult) => {
      this.pokemons = pokemonsResult.results;
      for (let i = 0; i < this.pokemons.length; i++) {
        const pokemonResponse: PokemonResult = await this.apiService.getPokemonfromUrlPromise(this.pokemons[i].url);
        this.pokemons[i] = { ...this.pokemons[i], details: pokemonResponse };
      }
    });
  }

  async initPokemonsPromise() {
    const pokemonsResult: PokemonsResult =
      await this.apiService.getPokemonsPromise();
    this.pokemons = pokemonsResult.results;
  }

  getOnlyPokemons(): Observable<SimplePokemon[]> {
    return this.apiService
      .getPokemons()
      .pipe(map((pokemonsResult: PokemonsResult) => pokemonsResult.results));
  }
}
