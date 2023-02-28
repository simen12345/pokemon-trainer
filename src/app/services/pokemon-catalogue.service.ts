import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Pokemon } from '../models/pokemon.model';
import { PokeResults } from '../models/pokemon.model';
import {finalize} from 'rxjs'
const {apiPokemons} = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemons:Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;
  

  get pokemons(): Pokemon[]{
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }
  get loading():boolean{
    return this._loading;
  }
  

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void {
    this._loading = true;
    this.http.get<PokeResults>(apiPokemons)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons : PokeResults) => {
          this._pokemons = pokemons.results;
            
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;

        }

      })

  } 
}
