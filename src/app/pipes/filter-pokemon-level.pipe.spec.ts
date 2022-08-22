import { FilterPokemonLevelPipe } from './filter-pokemon-level.pipe';

describe('FilterPokemonLevelPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPokemonLevelPipe();
    expect(pipe).toBeTruthy();
  });
});
