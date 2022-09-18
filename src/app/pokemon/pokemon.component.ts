import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] 
})
export class PokemonComponent implements OnInit {

  constructor(private service:PokemonService){}

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

}
