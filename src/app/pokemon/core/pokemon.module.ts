import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { CardComponent } from '../card/card.component';
import { DetailsComponent } from '../details/details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    SearchPokemonComponent,
    CardComponent,
    DetailsComponent,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PokemonRoutingModule
  ],
  exports:[
    ListComponent,
    SearchPokemonComponent,
    CardComponent,
    DetailsComponent
  ]
})
export class PokemonModule { }
