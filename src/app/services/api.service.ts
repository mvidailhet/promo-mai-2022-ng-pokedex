import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, lastValueFrom } from 'rxjs';
import { PokemonResult } from '../models/api-results/pokemon';
import { PokemonsResult } from '../models/api-results/pokemons';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {

  }

  getPokemons() {
    return this.httpClient.get<PokemonsResult>(`${this.apiUrl}/pokemon?limit=150`);
  }

  getPokemonfromUrl(url: string) {
    return this.httpClient.get<PokemonResult>(url).pipe(delay(Utils.random(1, 3000)));
  }

  getPokemonfromUrlPromise(url: string) {
    return lastValueFrom(this.httpClient.get<PokemonResult>(url));
  }

  getPokemonsPromise() {
    return lastValueFrom(this.getPokemons());
  }


}
