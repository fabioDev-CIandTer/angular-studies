import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { PokemonComponent } from '../pokemon.component';

const routes: Routes = [
  {path: "", component:PokemonComponent,
    children: [
      {path:'details/:id', component:DetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
