import { PokemonResolver } from './../store/pokemon.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { PokemonComponent } from '../pokemon.component';

const routes: Routes = [
  {path: "", component:PokemonComponent,
  resolve:{
    pokemons:PokemonResolver
  },
    children: [
      {path:'details/:id', component:DetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    PokemonResolver
  ]
})
export class PokemonRoutingModule { }
