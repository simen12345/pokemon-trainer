import { Component, OnInit } from '@angular/core';
import { TrainerService } from './services/trainer.service';
import { PokemonCatalogueService } from './services/pokemon-catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon-trainer';

  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonService: PokemonCatalogueService
  ) { }

  ngOnInit(): void {
    if (this.trainerService.trainer) {
      this.pokemonService.findAllPokemons();
    }
  }
}
