import { RawPokemonModel } from './../card/pokemon-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() pokemons:Array<RawPokemonModel>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
