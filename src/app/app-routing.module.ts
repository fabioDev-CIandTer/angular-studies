import { DetailsComponent } from './pokemon/details/details.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: "todo", component:TodoListComponent},
  {path: "pokemon", component:PokemonComponent,
    children: [
      {path:'details/:id', component:DetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
