import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemon: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPokemonPromise().then((res: any) => {
      this.pokemon = res;
      console.log(this.pokemon);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  getPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemo/1');
  }

  getPokemonPromise() {
    return lastValueFrom(this.getPokemon());
  }
}
