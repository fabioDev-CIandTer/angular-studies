import { Component, Input, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { RawPokemonModel } from './../card/pokemon-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() pokemons:Array<RawPokemonModel>=[];
  public isPageDetailLoaded

  constructor(private pokemonService:PokemonService) {
    this.isPageDetailLoaded=pokemonService.getDetailsPokemon
   }

  ngOnInit(): void {
  }

}
