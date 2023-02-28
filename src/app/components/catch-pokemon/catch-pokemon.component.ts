import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-pokemon',
  templateUrl: './catch-pokemon.component.html',
  styleUrls: ['./catch-pokemon.component.css']
})
export class CatchPokemonComponent  implements OnInit{

  @Input() pokemonName: string = "";
 
  constructor(){ }
 
  ngOnInit(): void {   
 }
 onCatchClick(): void{
  alert("Catched a pokemon");

 }
}
