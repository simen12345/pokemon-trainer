export interface Pokemon {
    name: string;
    url:string;
}

export interface PokeResults{
    count:number,
    next:string,
    previous:string,
    results:Pokemon[]
}
