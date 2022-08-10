import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  //pokemonName: string | undefined;
  pokemonInputValue: string | undefined;
  wasPokemonAdded = false;
  wasBadWordWritten = false;

  constructor() { }

  ngOnInit(): void {

  }

  onAddPokemonClick() {

    if (!this.pokemonInputValue) return;

    const badWords = ['con', 'debile'];
    if (badWords.includes(this.pokemonInputValue)) {
      this.wasBadWordWritten = true;

      setTimeout(() => {
        this.wasBadWordWritten = false;
      }, 3000);

      return;
    }

    this.pokemonInputValue = '';
    this.wasPokemonAdded = true;


    setTimeout(() => {
      this.wasPokemonAdded = false;
    }, 3000);


  }

  onPokemonNameInputChange(event: Event) {
    //const inputElt = event.target as HTMLInputElement;
    //this.pokemonName = inputElt.value;

  }

}
