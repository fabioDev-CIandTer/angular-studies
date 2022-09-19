import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from './pokemon-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon:PokemonModel={name:"", img:"", types:[]}
  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

}
