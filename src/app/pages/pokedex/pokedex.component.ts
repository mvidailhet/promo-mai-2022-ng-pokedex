import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, lastValueFrom, map, Observable } from 'rxjs';
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
    //this.initPokemons();
    this.initPokemonsPromise();
  }

  initPokemons() {
/*     this.getPokemons().subscribe((res: PokemonsResult) => {
      this.pokemons = res.results;
    }); */

    this.getOnlyPokemons().subscribe((pokemons: SimplePokemon[]) => {
      this.pokemons = pokemons;
    });
  }

  async initPokemonsPromise() {
    const pokemonsResult: PokemonsResult = await this.getPokemonsPromise();
    this.pokemons = pokemonsResult.results;
  }

  getOnlyPokemons(): Observable<SimplePokemon[]> {
    return this.getPokemons().pipe(
      delay(1000),
      map((pokemonsResult: PokemonsResult) => pokemonsResult.results),
    );
  }

  getPokemons() {
    return this.httpClient.get<PokemonsResult>('https://pokeapi.co/api/v2/pokemon?limit=150');
  }

  getPokemonsPromise() {
    return lastValueFrom(this.getPokemons());
  }
}
