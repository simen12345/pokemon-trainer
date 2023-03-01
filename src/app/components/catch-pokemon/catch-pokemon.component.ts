import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-catch-pokemon',
  templateUrl: './catch-pokemon.component.html',
  styleUrls: ['./catch-pokemon.component.css']
})
export class CatchPokemonComponent  implements OnInit{

  @Input() pokemonName: string = "";
 
  get loading(): boolean{
    return this. caughtService.loading;
  }
  constructor(
    private readonly caughtService:CaughtPokemonService
  ){ }
 
  ngOnInit(): void {   
 }
 onCatchClick(): void{
  this.caughtService.addToCaught(this.pokemonName)
  .subscribe({
    next: (response:Trainer) => {

    },
    error: (error:HttpErrorResponse) => {
      console.log("Error", error.message);
    }
    
  })

 }
}
