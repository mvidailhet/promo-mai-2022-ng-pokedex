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
    this.apiService
      .getPokemons()
      .subscribe(async (pokemonsResult: PokemonsResult) => {
        this.pokemons = pokemonsResult.results;

        const pokemonDetailsPromises = this.pokemons.map(
          (pokemon: SimplePokemon) => {
            return this.apiService.getPokemonfromUrlPromise(pokemon.url);
          }
        );

        // On attend que toutes les Promises soient retournées
        // Puis on ajoute les images (pas du tout ce qu'on veut pour cet exemple)
        Promise.all(pokemonDetailsPromises).then(
          (pokemonResults: PokemonResult[]) => {
            pokemonResults.forEach(
              (pokemonResult: PokemonResult, index: number) => {
                this.pokemons[index] = {
                  ...this.pokemons[index],
                  details: pokemonResult,
                };
              }
            );
          }
        );

/*         this.pokemons.forEach(async (pokemon: SimplePokemon, index) => {
          const pokemonResponse: PokemonResult =
            await this.apiService.getPokemonfromUrlPromise(pokemon.url);
          this.pokemons[index] = {
            ...this.pokemons[index],
            details: pokemonResponse,
          };
        }); */
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
