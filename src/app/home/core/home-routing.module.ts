import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: "todo", loadChildren: ()=> import('../../todo-list/core/todo-routing.module').then((module) => module.TodoRoutingModule)},
  {path: "pokemon", loadChildren: ()=> import('../../pokemon/core/pokemon-routing.module').then((module) => module.PokemonRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
