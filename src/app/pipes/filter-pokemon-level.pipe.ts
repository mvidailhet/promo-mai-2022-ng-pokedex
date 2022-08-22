import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'filterPokemonLevel'
})
export class FilterPokemonLevelPipe implements PipeTransform {

  transform(pokemons: Pokemon[] | undefined, minLevel: number): Pokemon[] | undefined {
    if (!pokemons) return undefined;
    return pokemons.filter((pokemon) => {
      return pokemon.level > minLevel;
    });
  }

}
