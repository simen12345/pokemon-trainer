export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokemonResults {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}