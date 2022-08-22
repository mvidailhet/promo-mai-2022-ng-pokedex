import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PokemonsResult, SimplePokemon } from 'src/app/models/api-results/pokemons';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons?: SimplePokemon[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.initPokemons();
  }

  initPokemons() {
    this.getPokemons().subscribe((res: PokemonsResult) => {
      this.pokemons = res.results;
    });
  }

  getPokemons() {
    return this.httpClient.get<PokemonsResult>('https://pokeapi.co/api/v2/pokemon?limit=150');
  }

  getPokemonsPromise() {
    return lastValueFrom(this.getPokemons());
  }
}
