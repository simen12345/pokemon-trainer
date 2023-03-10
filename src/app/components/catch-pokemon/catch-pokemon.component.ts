import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catch-pokemon',
  templateUrl: './catch-pokemon.component.html',
  styleUrls: ['./catch-pokemon.component.css']
})
export class CatchPokemonComponent  implements OnInit{

  public loading: boolean = false;

   public isCaught:boolean=false; 
  @Input() pokemonName: string = "";
  
  constructor(
    private trainerService : TrainerService,
    private readonly caughtService:CaughtPokemonService
  ){ }
 
  ngOnInit(): void {   
    this.isCaught = this.trainerService.inCaught(this.pokemonName);
    
 }
 onCatchClick(): void{
  this.loading = true;
 
  this.caughtService.addToCaught(this.pokemonName)
  .subscribe({
    next: (trainer:Trainer) => {
      this.loading = false;
      this.isCaught = this.trainerService.inCaught(this.pokemonName);

    },
    error: (error:HttpErrorResponse) => {
      console.log("Error", error.message);
    }
    
  })

 }
}
