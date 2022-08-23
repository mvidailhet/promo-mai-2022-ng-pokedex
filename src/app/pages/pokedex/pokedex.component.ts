import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
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
    //this.initPokemons();
    this.initPokemonsPromise();
  }

  initPokemons() {
    this.getOnlyPokemons().subscribe((pokemons: SimplePokemon[]) => {
      this.pokemons = pokemons;
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
