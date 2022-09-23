import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  @Output() public buscaPokemonEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buscaPokemonEmitter(value:string){
    console.log("kkk", value)
    this.buscaPokemonEventEmitter.emit(value);
  }

}
