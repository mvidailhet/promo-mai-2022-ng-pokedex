import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemon: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPokemon().subscribe((res: any) => {
      this.pokemon = res;
      console.log(this.pokemon);
    });
  }

  getPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/1');
  }
}
