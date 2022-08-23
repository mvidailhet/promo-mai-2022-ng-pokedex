import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonResult } from 'src/app/models/api-results/pokemon';
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
  pokemons?: SimplePokemon[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.initPokemons();
  }

  initPokemons() {
    this.apiService.getPokemons().subscribe((pokemonsResult: PokemonsResult) => {
      this.pokemons = pokemonsResult.results;

      this.apiService.getPokemonfromUrl(this.pokemons[0].url).subscribe((response: PokemonResult) => {
        console.log(response);
      });
    });
  }

/*   async initPokemonsPromise() {
    const pokemonsResult: PokemonsResult =
      await this.apiService.getPokemonsPromise();
    this.pokemons = pokemonsResult.results;
  }

  getOnlyPokemons(): Observable<SimplePokemon[]> {
    return this.apiService
      .getPokemons()
      .pipe(map((pokemonsResult: PokemonsResult) => pokemonsResult.results));
  } */
}
