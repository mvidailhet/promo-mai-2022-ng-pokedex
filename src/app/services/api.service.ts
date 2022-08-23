import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PokemonsResult } from '../models/api-results/pokemons';

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

  getPokemonsPromise() {
    return lastValueFrom(this.getPokemons());
  }


}
