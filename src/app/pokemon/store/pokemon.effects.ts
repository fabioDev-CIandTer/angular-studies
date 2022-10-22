
import { AllPokemonPropertiesModel } from './../model/pokemon-model';
import { concatMap,map, tap } from 'rxjs';
import { PokemonService } from './../pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonsActions } from './pokemon-types';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';



@Injectable()
export class PokemonEffects {

  private listaPokemons:AllPokemonPropertiesModel[]=[]

  paginacaoActionEffect = createEffect(
    ()=> 
     this.actions$.pipe(
      ofType(PokemonsActions.getPokemonDataAction),
      concatMap(action => this.service.apiListAllPokemons(action.paginacao)),
      tap(paginacao=> 
        {
          debugger;
          this.store.dispatch(
            PokemonsActions.paginacaoActionLoaded(
              {paginacao: {count:paginacao.count, next:paginacao.next,previous:paginacao.previous}}
            ) 
          )
          return paginacao
        }
      ),
      map(paginacao=> PokemonsActions.urlActionLoaded({url:paginacao.results})),
    )
  )

  urlsFetchActionEffect = createEffect(
    ()=> 
     this.actions$.pipe(
      ofType(PokemonsActions.urlActionLoaded),
        map(urlsArray=> 
          urlsArray.url.map(
            urlObject=> this.service.getDetailsPokemon(urlObject.url).subscribe({
              next:(v)=> this.listaPokemons.push(v),
              complete:()=>{
                if(this.listaPokemons.length==urlsArray.url.length){
                  this.store.dispatch(PokemonsActions.listaActionLoaded({lista:this.listaPokemons}))
                }
              }
            })
          )
        )
  ), {dispatch:false} )



  constructor(private actions$: Actions,
    private store:Store<AppState>,
    private service:PokemonService) {}
}

