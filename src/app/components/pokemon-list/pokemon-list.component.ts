import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  isAddButtonDisabled = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.isAddButtonDisabled = false;
    }, 2000);

  }

}
