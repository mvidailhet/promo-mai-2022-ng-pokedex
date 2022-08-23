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

  getPokemonIdFromApiUrl(apiUrl: string) {
    const splitSlashUrl = apiUrl.split('/');
    // Le dernier element est '' à cause du '/' de fin
    return parseInt(splitSlashUrl[splitSlashUrl.length - 2]);
  }

  getPokemonIdZeroedString(id: number) {
    let res = '';
    if (id < 100) res += '0';
    if (id < 10) res += '0';
    res += id;
    return res;
  }

  initPokemons() {
    this.apiService
      .getPokemons()
      .subscribe(async (pokemonsResult: PokemonsResult) => {
        this.pokemons = pokemonsResult.results;
        this.pokemons.forEach(async (pokemon: SimplePokemon, index) => {
          const pokemonId = this.getPokemonIdFromApiUrl(this.pokemons[index].url);

          this.pokemons[index] = {
            ...this.pokemons[index],
            id: pokemonId,
            idZeroedString: this.getPokemonIdZeroedString(pokemonId),
          };

          const pokemonResponse: PokemonResult =
            await this.apiService.getPokemonfromUrlPromise(pokemon.url);
          this.pokemons[index] = {
            ...this.pokemons[index],
            details: pokemonResponse,
          };
        });
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
