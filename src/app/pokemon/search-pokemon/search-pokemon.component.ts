import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  @Output() public buscaPokemonEventEmitter = new EventEmitter();

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  buscaPokemonEmitter(value:string){
    console.log("kkk", value)
    
    this.buscaPokemonEventEmitter.emit(value);
  }

}
