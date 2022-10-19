import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() pokemons:Array<AllPokemonPropertiesModel>  | undefined
  
}
