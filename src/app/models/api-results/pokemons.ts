export interface PokemonsResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
  id?: number;
  idZeroedString?: string;
}
