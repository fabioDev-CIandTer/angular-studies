import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ListComponent,
    SearchPokemonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ListComponent,
    SearchPokemonComponent,
    CardComponent
  ]
})
export class PokemonModule { }
