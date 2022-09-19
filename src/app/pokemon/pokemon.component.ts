import { Component, Input, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { RawPokemonModel } from './card/pokemon-model';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  @Input() pokemonsList:Array<RawPokemonModel>=[];

  constructor(private service:PokemonService){}

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe({
      next: (v) => {
        console.log(v)
        this.pokemonsList = v.results
      },
      error: (e) => console.error(e),
      complete: () => console.info(this.pokemonsList) 
    });
  }

}
