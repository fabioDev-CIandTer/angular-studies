import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { CardComponent } from '../card/card.component';
import { DetailsComponent } from '../details/details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from '../store/pokemon.effects';
import {StoreModule} from '@ngrx/store'
import { pokemonFeatureKey, reducer } from './../store/pokemon.reducer';



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
    PokemonRoutingModule,
    EffectsModule.forFeature([PokemonEffects]),
    StoreModule.forFeature(pokemonFeatureKey, reducer),
  ],
  exports:[
    ListComponent,
    SearchPokemonComponent,
    CardComponent,
    DetailsComponent
  ]
})
export class PokemonModule { }
